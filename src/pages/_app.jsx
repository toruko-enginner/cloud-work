import "@/styles/globals.css";
import AuthContext from "@/contexts/authContext";

export default function App({Component, pageProps}) {
    return (
        <AuthContext>
            <Component {...pageProps} />
        </AuthContext>
    );
}
