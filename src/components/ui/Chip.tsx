type ChipProps = {
  title: string;
  background_color: string;
  propClassName: string
};
const Chip = ({ background_color, title, propClassName }: ChipProps) => {
  return (
    <div
      style={{ backgroundColor: background_color }}
      className={`flex items-center justify-center whitespace-nowrap rounded-[30px] mb-2 ${propClassName}`}
    >
      <p className="text-white text-[12px] ">{title}</p>
    </div>
  );
};

export default Chip;
