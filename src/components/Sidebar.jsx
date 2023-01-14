import React from "react";
import { navLinks } from "../constants";
import { useState } from "react";

const Sidebar = ({toggleSideBar}) => {

    return (
        <div className={`${toggleSideBar ? 'flex' : 'hidden'} bg-black absolute`}>
            <ul className="list-none flex flex-col items-center justify-end flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        className={`font-poppins font-semibold cursor-pointer text-[16px] text-textBlack ${
                            index !== navLinks.length - 1 ? "mb-4" : "mb-0"
                        }`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
