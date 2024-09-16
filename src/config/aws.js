const config = {
    Auth: {
        Cognito: {
            userPoolClientId:
            process.env.NEXT_PUBLIC_COGNITO_USER_POOLS_WEB_CLIENT_ID,
            userPoolId: process.env.NEXT_PUBLIC_USER_POOLS_ID,
        },
    },
    API: {
        GraphQL: {
            endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
            region: process.env.NEXT_PUBLIC_AWS_REGION,
            defaultAuthMode: "userPool",
        },
    },
};

export default config;