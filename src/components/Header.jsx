import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import MenuDropDown from "../subComponents/MenuDropDown";
import SideBar from "../subComponents/SideBar";

export default function Header() {

    const [menuDropDown, setMenuDropDown] = useState({ state: false, value: "" });
    const [open, setOpen] = useState(false)


    return (
        <>
            <SideBar open={open} setOpen={setOpen} />
            <header className="z-30 flex justify-between items-center relative w-full">
                <Link to={`/`} className="md:text-5xl sm:text-3xl text-2xl font-extrabold">
                    RI5E
                </Link>
                <div className="lg:flex hidden gap-20 items-center justify-center text-xl font-medium">
                    <Link to={`/about-us`} className="hover:underline underline-offset-8 transition-all ease-linear py-8">
                        About Us
                    </Link>
                    <Link to={`/services`} className="hover:underline underline-offset-8 transition-all ease-linear py-6" onMouseEnter={() => setMenuDropDown({ state: true, value: "Services" })} onMouseLeave={() => setMenuDropDown({ state: false, value: "" })}>
                        Services
                    </Link>
                    <Link to={`/careers`} className="hover:underline underline-offset-8 transition-all ease-linear py-6" onMouseEnter={() => setMenuDropDown({ state: true, value: "Careers" })} onMouseLeave={() => setMenuDropDown({ state: false, value: "" })}>
                        Careers
                    </Link>
                    <button className="bg-[#4353FF] hover:text-blue-500 hover:bg-white transition-all ease-linear px-7 py-4 font-semibold text-lg">
                        Get In Touch
                    </button>
                </div>
                <button className="lg:hidden flex bg-[#4353FF] rounded-full sm:p-3 p-2 items-center justify-center" onClick={() => setOpen(!open)}>
                    <HiOutlineMenuAlt4 />
                </button>
            </header>
            <MenuDropDown menuDropDown={menuDropDown} setMenuDropDown={setMenuDropDown} />
        </>
    )
}