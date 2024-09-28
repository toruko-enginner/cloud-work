import { Amplify } from "aws-amplify";
import config from "@/config/aws";
import React, { useContext, useState } from "react";
import { signIn, getCurrentUser } from "aws-amplify/auth";
import message from "@/config/message";
import { generateClient } from "aws-amplify/api";
import { getDnmCwkAccountForUserId } from "@/graphql/queries";

Amplify.configure(config, { ssr: true });

const AuthContext = React.createContext(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(undefined);

  // ログイン処理
  const login = async (email, password) => {
    try {
      await signIn({ username: email, password: password });
      const { userId } = await getCurrentUser();
      const client = generateClient();
      const result = await client.graphql({
        query: getDnmCwkAccountForUserId,
        variables: {
          user_id: userId,
        },
      });
      setAccount(result["data"]["getDnmCwkAccountForUserId"]);
      return { isSuccessed: true, errorMessage: undefined, urlTo: "/" };
    } catch (error) {
      return {
        isSuccessed: false,
        errorMessage: message.M1001,
        urlTo: undefined,
      };
    }
  };

  return (
    <AuthContext.Provider value={{ login, account }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
