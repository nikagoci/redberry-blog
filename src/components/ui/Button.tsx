import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-[#5D37F3] text-white border-radius font-medium rounded-[8px] px-[20px] py-[10px]">
      {children}
    </button>
  );
};

export default Button;
