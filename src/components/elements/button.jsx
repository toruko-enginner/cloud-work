/**
 * ログイン前ボタン（emerald）
 * @param {*} param0
 * @returns
 */
export const ButtonBgEmerald = ({ title }) => {
  return (
    <div className="mt-6">
      <button
        type="submit"
        className="w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400"
      >
        {title}
      </button>
    </div>
  );
};
