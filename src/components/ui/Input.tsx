import InfoCircle from "../../assets/svg/info-circle.svg";

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  setInput: (input: string) => void;
  errorMessage: string;
};

const Input = ({
  label,
  name,
  placeholder,
  setInput,
  errorMessage,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name} className="text-[14px] text-[#1A1A1F]">
        {label}
      </label>
      <input
        type="text"
        className={`${
          errorMessage
            ? "border-[#EA1919] bg-[#FAF2F3]"
            : "border-[#5D37F3] bg-[#F7F7FF]"
        } w-full rounded-[12px] border   outline-none py-[12px] pl-[13px] text-[#1A1A1F] text-[14px] leading-[20px] font-medium`}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={(e) => setInput(e.target.value)}
      />
      {errorMessage && (
        <div className="flex gap-x-[8px]">
          <img src={InfoCircle} alt="info circle" />
          <h3 className="text-[#EA1919] text-[12px] leading-[20px]">{errorMessage}</h3>
        </div>
      )}
    </>
  );
};

export default Input;
