import React from "react";
import { logo, close, menu } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = ({toggleNavBar, menuToggle}) => {
    // const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex justify-between py-6 navbar items-center">
            <img
                src={logo}
                alt="Foodify"
                className="ss:w-[124px] ss:h-[45px] w-[100px] object-contain z-[5]"
            />

            <ul className="list-none sm:flex hidden items-center justify-end flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-semibold cursor-pointer text-[16px] text-textBlack ${
                            index !== navLinks.length - 1 ? "mr-10" : "mr-0"
                        }`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden z-[5] flex flex-1 justify-end item-center relative">
                <img
                    src={menuToggle ? close : menu}
                    alt="menu"
                    onClick={() => toggleNavBar((prev) => !prev)}
                    className="w-[28px] h-[28px] object-contain"
                />
            </div>

        </nav>
    );
};

export default Navbar;
