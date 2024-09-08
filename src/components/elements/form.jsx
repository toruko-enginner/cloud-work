import { forwardRef } from "react";

/**
 * ログイン前の入力フォーム
 * @param {*} param0
 * @returns
 */
export const InputForm = ({ title, type, name, errorMessage }) => {
  return (
    <div className="mt-6">
      <label
        htmlFor={name}
        className="mb-2 inline-block text-sm text-gray-700 sm:text-base"
      >
        {title}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        autoComplete={name}
        className="w-full rounded border px-3 py-2 text-gray-700 outline-none ring-emerald-400 transition focus:ring"
      />
      <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
    </div>
  );
};
