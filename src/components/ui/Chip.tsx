type ChipProps = {
  title: string;
  background_color: string;
  propClassName: string;
  onClick?: (title: string) => void;
};

const Chip = ({
  background_color,
  title,
  propClassName,
  onClick,
}: ChipProps) => {
  // Checking if onClick is passed as prop
  const checkClickListener = () => (onClick ? onClick(title) : null);

  return (
    <div
      style={{ backgroundColor: background_color }}
      className={`flex items-center justify-center whitespace-nowrap rounded-[30px] mb-2 ${propClassName}`}
      onClick={checkClickListener}
    >
      <p className="text-white text-[12px] ">{title}</p>
    </div>
  );
};

export default Chip;
