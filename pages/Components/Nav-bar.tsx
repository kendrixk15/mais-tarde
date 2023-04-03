import Link from "next/link";
import { useState } from "react";
import Hamburger from "../icons/Hamburger";
import XIcon from "../icons/XIcon";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="hidden md:flex w-screen gap-16 justify-center bg-white text-black">
        <Link href={""}>Mais Tarde</Link>
        <Link href={"#menu"}>Product</Link>
        <Link href={""}>Offer</Link>
        <Link href={"#contact"}>Contact Us</Link>
      </div>
      <div className=" flex md:hidden w-full h-4 gap-16 justify-between pb-12 px-1 bg-white shadow-sm text-black text-[14px] fixed left-0">
        <Link href={""}>
          <div>
            <img src="/mais-tarde-white.png" className="h-10 w-auto -ml-2" />
          </div>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="mt-2 transition-all ">
          {!isOpen ? 
          <Hamburger /> : <XIcon />}
        </button>
        <div
          className={`absolute -right-24 flex flex-col w-full rounded-sm h-44 gap-3.5 bg-white top-12 p-2 transition-all duration-500 ${
            !isOpen ? "translate-x-96 opacity-0" : "-translate-x-24 opacity-100"
          }`}
        >
          <Link href={"#menu"}>Product</Link>
          <hr className="w-full h-[1px] bg-white/75" />
          <Link href={""}>Offer</Link>
          <hr className="w-full h-[1px] bg-white/75" />
          <Link href={"#contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
