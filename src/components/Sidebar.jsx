import React from "react";
import { navLinks } from "../constants";
import { useState } from "react";

const Sidebar = ({toggleSideBar, toggleHandler}) => {

    
    const closeSideBarHandler = () => {
        toggleHandler((prev) => !prev)
    }

    return (
        <div className={`${toggleSideBar ? 'flex' : 'hidden'} bg-primary py-[50px] absolute w-full sidebar`}>
            <ul className="list-none flex flex-col items-center justify-end flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-semibold cursor-pointer text-[16px] text-textBlack ${
                            index !== navLinks.length - 1 ? "mb-4" : "mb-0"
                        }`}
                    >
                        <a href={`#${nav.id}`} onClick={closeSideBarHandler}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
