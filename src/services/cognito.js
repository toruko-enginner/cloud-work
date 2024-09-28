import { decodeProtectedHeader, importJWK, jwtVerify } from "jose";

const clientId = process.env.NEXT_PUBLIC_COGNITO_USER_POOLS_WEB_CLIENT_ID;
const userPoolsId = process.env.NEXT_PUBLIC_USER_POOLS_ID;
const cognitoIdpUrl = `https://cognito-idp.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com`;
const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;

/**
 * cookieからcognitoトークン情報を取得
 * @param {*} request
 * @param {*} tokenType
 * @returns
 */
export const getCognitoTokenByCookie = (request, tokenType) => {
  const regexp = new RegExp(
    `CognitoIdentityServiceProvider\\.${clientId}\\..+\\.${tokenType}`
  );
  const cookies = request.cookies
    .getAll()
    .filter((cookie) => regexp.test(cookie.name));
  return cookies.length === 1 ? cookies[0] : null;
};

/**
 * トークン検証
 * @param {*} token
 */
export const verifyCognitoToken = async (token) => {
  const { keys } = await fetch(
    `${cognitoIdpUrl}/${userPoolsId}/.well-known/jwks.json`
  ).then((res) => res.json());
  const { kid } = decodeProtectedHeader(token);
  const jwk = keys.find((key) => key.kid === kid);
  if (!jwk) {
    throw Error("JWK is not found in the token");
  }
  const jwtImport = await importJWK(jwk);
  await jwtVerify(token, jwtImport);
};

/**
 * トークンの再取得
 * @param {*} refreshToken
 * @returns
 */
export const refreshCognitoToken = async (refreshToken) => {
  const res = await fetch(`${cognitoDomain}/oauth2/token`, {
    method: "POST",
    headers: new Headers({
      "content-type": "application/x-www-form-urlencoded",
    }),
    body: Object.entries({
      grant_type: "refresh_token",
      client_id: clientId,
      refresh_token: refreshToken,
    })
      .map(([k, v]) => `${k}=${v}`)
      .join("&"),
  });
  if (!res.ok) {
    throw new Error(JSON.stringify(await res.json()));
  }
  const newTokens = await res.json();
  return newTokens;
};

/**
 * 認証トークンをCookieに設定
 * @param {*} request
 * @param {*} response
 * @param {*} tokenType
 * @param {*} tokenValue
 * @returns
 */
export const setTokenIntoCookie = (
  request,
  response,
  tokenType,
  tokenValue
) => {
  const cookie = getCognitoTokenByCookie(request, tokenType);
  if (!cookie) {
    throw Error(`${tokenType} is not found in the request cooke`);
  }
  console.log("name", cookie.name);
  console.log("value", tokenValue);
  response.cookies.set({
    name: cookie.name,
    value: tokenValue,
  });
  return response;
};
