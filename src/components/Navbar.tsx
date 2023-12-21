import RedberryLogo from "../assets/redberry-logo.png";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between def-container py-[28px]">
        <img src={RedberryLogo} alt="REDBERRY" className="h-[24px]" />
        <Button>შესვლა</Button>
      </div>
    </nav>
  );
};

export default Navbar;
