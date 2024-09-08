import React from "react";
import { ButtonBgEmerald } from "@/components/elements/button";
import { InputForm } from "@/components/elements/form";
import { NoAuthLayout } from "@/components/templates/layout";
import { NoAuthHeading1 } from "@/components/elements/head";

/**
 * ログインフォーム
 * @returns
 */
export default function AuthForm() {
  return (
    <NoAuthLayout>
      <form className="w-full max-w-md mt-auto">
        <NoAuthHeading1 title="クラウド労務" />
        <InputForm title="メールアドレス" type="text" name="email" />
        <InputForm title="パスワード" type="password" name="password" />
        <ButtonBgEmerald title="ログイン" />
        <div className="mt-6 text-center ">
          <a
            className="text-sm text-emerald-500 hover:text-emerald-400"
            href="#"
          >
            パスワードをお忘れの方
          </a>
        </div>
      </form>
    </NoAuthLayout>
  );
}
