import { NextResponse } from "next/server";
import {
  getCognitoTokenByCookie,
  verifyCognitoToken,
  refreshCognitoToken,
  setTokenIntoCookie,
} from "@/services/cognito";

// 未認証アクセス可画面
const unAuthenticatedPaths = ["/auth"];

export async function middleware(request) {
  const idToken = getCognitoTokenByCookie(request, "idToken").value;
  const accessToken = getCognitoTokenByCookie(request, "accessToken").value;
  const refreshToken = getCognitoTokenByCookie(request, "refreshToken").value;
  console.log("idToken", idToken);
  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);
  const url = request.nextUrl.clone();

  // cookieからtokenが取得できない場合
  if (!idToken && !accessToken && !refreshToken) {
    if (!unAuthenticatedPaths.includes(url.pathname)) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
    return NextResponse.next();
  }

  try {
    // idToken検証結果が有効(認証済)
    await verifyCognitoToken(idToken);
    if (unAuthenticatedPaths.includes(url.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    try {
      // refreshTokenを使用して認証トークンを再取得
      const newTokens = await refreshCognitoToken(refreshToken);
      console.log("newTokens", newTokens);
      let response = NextResponse.next();
      response = setTokenIntoCookie(
        request,
        response,
        "idToken",
        newTokens.id_token
      );
      response = setTokenIntoCookie(
        request,
        response,
        "accessToken",
        newTokens.access_token
      );
      return response;
    } catch (error) {
      console.error("failed to the refresh token", error);
    }
  }
  return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
