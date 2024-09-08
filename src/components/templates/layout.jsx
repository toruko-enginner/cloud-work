import Head from "next/head";
import { NoAuthFooter } from "@/components/templates/footer";

/**
 * レイアウト
 * @param {*} param0
 * @returns
 */
export const NoAuthLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>クラウド労務</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        {children}
        <NoAuthFooter />
      </div>
    </>
  );
};
