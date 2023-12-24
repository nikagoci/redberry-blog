import { Link } from "react-router-dom";

import RedberryLogo from "../assets/redberry-logo.png";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between def-container py-[28px]">
        <Link to="/">
          <img src={RedberryLogo} alt="REDBERRY" className="h-[24px]" />
        </Link>
        <Button>შესვლა</Button>
      </div>
    </nav>
  );
};

export default Navbar;
