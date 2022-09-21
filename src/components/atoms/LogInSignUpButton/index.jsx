import classNames from "classnames";

const LogInSignUpButton = ({ children, theme = "light" }) => {
  return (
    <button
      className={classNames(
        "text-[#1c1d1f] font-bold px-3 h-10 border border-[#1c1d1f] ml-2 flex items-center",
        theme === "light"
          ? "bg-white hover:bg-gray-300"
          : "bg-[#1c1d1f] text-white hover:bg-black"
      )}
    >
      {children}
    </button>
  );
};
export default LogInSignUpButton;
