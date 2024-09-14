const config = {
    Auth: {
        Cognito: {
            userPoolClientId:
            process.env.NEXT_PUBLIC_COGNITO_USER_POOLS_WEB_CLIENT_ID,
            userPoolId: process.env.NEXT_PUBLIC_USER_POOLS_ID,
        },
    },
};

export default config;