import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  propClassName?: string;
  type?: "submit" | "button" | "reset"
};

const Button = ({ children, onClick, propClassName, type }: ButtonProps) => {
  return (
    <button
      className={`bg-[#5D37F3] text-white border-radius font-medium rounded-[8px] px-[20px] py-[10px] ${propClassName}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
