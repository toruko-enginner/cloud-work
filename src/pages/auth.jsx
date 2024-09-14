import {useState} from "react";
import {ButtonBgEmerald} from "@/components/elements/button";
import {InputTextForm, InputPassForm} from "@/components/elements/form";
import {NoAuthLayout} from "@/components/templates/layout";
import {NoAuthHeading1} from "@/components/elements/head";
import yup from "@/config/yup.jp";
import {useRouter} from "next/navigation";
import {passwordRule} from "@/config/yup.jp";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useAuth} from "@/contexts/authContext";

/* バリデーション定義 */
const schema = yup.object({
    email: yup.string().label("メールアドレス").required().email(),
    password: yup
        .string()
        .label("パスワード")
        .required()
        .min(8)
        .max(32)
        .matches(passwordRule),
});

/**
 * ログインフォーム
 * @returns
 */
export default function Auth() {
    const router = useRouter();
    const {login} = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {},
        resolver: yupResolver(schema),
    });

    /* ログイン処理 */
    const onSubmit = async (data) => {
        const result = await login(data["email"], data["password"]);
        if (result.isSuccessed) {
            router.push(result.urlTo);
        } else {
            setErrorMessage(result.errorMessage);
        }
    };

    return (
        <NoAuthLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mt-auto">
                <NoAuthHeading1 title="クラウド労務"/>
                <InputTextForm
                    title="メールアドレス"
                    name="email"
                    errorMessage={errors.email?.message}
                    register={register}
                />
                <InputPassForm
                    title="パスワード"
                    type="password"
                    name="password"
                    errorMessage={errors.password?.message}
                    register={register}
                />
                <ButtonBgEmerald title="ログイン" type="submit"/>
                <div className="mt-2">
                    <span className="text-red-500 text-sm">{errorMessage}</span>
                </div>
                <div className="mt-6 text-center ">
                    <a className="text-sm text-emerald-500 hover:text-emerald-400" href="#">
                        パスワードをお忘れの方
                    </a>
                </div>
            </form>
        </NoAuthLayout>
    );
}
