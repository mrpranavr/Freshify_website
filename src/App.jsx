import React from "react";
import "./index.css";
import styles from './style'
import {
    Hero,
    Benefits,
    Downloads,
    Subscriptions,
    CTA,
    ToggleNavbar,
    Footer
} from "./components/index";

function App() {

    console.log('App build') // Comment this during deployment

    return (
        <div className="bg-primary w-full overflow-hidden">
            <ToggleNavbar />

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
                <Footer />
              </div>
            </div>

        </div>
    );
}

export default App;
