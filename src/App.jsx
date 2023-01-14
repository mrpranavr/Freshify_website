import React from "react";
import "./index.css";
import styles from './style'
import { navLinks } from "./constants";
import { useState } from "react";


import {
    NavBar,
    Hero,
    Benefits,
    Downloads,
    Subscriptions,
    CTA,
    Contact,
    Sidebar
} from "./components/index";

function App() {

    const [toggle, setToggle] = useState(false)

    return (
        <div className="bg-primary w-full overflow-hidden">
            <Sidebar toggleSideBar={toggle}/>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`} >
                <NavBar toggleNavBar={setToggle} menuToggle={toggle} />
              </div>
            </div>

            <div className={`${styles.flexStart} bg-primary`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`} >
                <Benefits />
                <Downloads />
                <Subscriptions />
                <CTA />
                <Contact />
              </div>
            </div>
        </div>
    );
}

export default App;
