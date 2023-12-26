import { Link } from "react-router-dom";

import RedberryLogo from "../assets/redberry-logo.png";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import { useState } from "react";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
      <nav>
        <div className="flex items-center justify-between def-container py-[28px]">
          <Link to="/">
            <img src={RedberryLogo} alt="REDBERRY" className="h-[24px]" />
          </Link>
          <Button onClick={() => setOpenModal(true)}>შესვლა</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
