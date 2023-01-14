import React from "react";
import {Sidebar, NavBar} from './index'
import { useState } from "react";
import styles from "../style";

const ToggleNavbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <Sidebar toggleSideBar={toggle} toggleHandler={setToggle} />
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar toggleNavBar={setToggle} menuToggle={toggle} />
                </div>
            </div>
        </div>
    );
};

export default ToggleNavbar;
