import * as yup from "yup";

// 半角英(小文字大文字)数字それぞれ1種類ずつ
export const passwordRule = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z-]*$/;

/**
 * バリデーションルール
 */
const jpLocale = {
    mixed: {
        required: (param) => `${param.label}は必須です。`,
        oneOf: (param) =>
            `${param.label}は${param.values}のいずれかで入力してください。`,
    },
    string: {
        length: (param) =>
            `${param.label}は${param.length}文字ちょうどで入力してください。`,
        min: (param) => `${param.label}は${param.min}文字以上で入力してください。`,
        max: (param) => `${param.label}は${param.max}文字以下で入力してください。`,
        matches: (param) => {
            switch (param.regex) {
                case passwordRule:
                    return "半角英大文字英小文字数字をそれぞれ1種類ずつ含んだ形で入力してください。";
                default:
                    return `${param.label}は「${param.regex}」形式に一致していなければなりません。`;
            }
        },
        email: (param) => `${param.label}はメールアドレス形式で入力してください。`,
        url: (param) => `${param.label}はURL形式で入力してください。`,
    },
    number: {
        min: (param) => `${param.label}は${param.min}以上で入力してください。`,
        max: (param) => `${param.label}は${param.max}以下で入力してください。`,
        lessThan: (param) =>
            `${param.label}は${param.less}未満で入力してください。`,
        moreThan: (param) =>
            `${param.label}は${param.more}より大きくなければなりません。`,
        positive: (param) => `${param.label}は正数で入力してください。`,
        negative: (param) => `${param.label}は負数で入力してください。`,
        integer: (param) => `${param.label}は整数で入力してください。`,
    },
    date: {
        min: (param) =>
            `${param.label}は${param.min}より未来日で入力してください。`,
        max: (param) =>
            `${param.label}は${param.max}より過去日で入力してください。`,
    },
};

yup.setLocale(jpLocale);
export default yup;
