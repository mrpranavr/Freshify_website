import React from "react";
import Button from "./Button";
import styles from "../style";
import { InView } from "react-intersection-observer";

const CTA = () => {
    return (
        <InView threshold={0.2} triggerOnce={true}>
            {({ref, inView}) => (
                <section ref={ref} className={`${styles.padding} ${styles.marginY} ${styles.flexCenter} ${inView ? 'isVisible delay-1' : 'notVisible'} sm:flex-row flex-col bg-green-gradient rounded-[20px]`}>
                    <div className="flex flex-col flex-1">
                        <h2 className={`${styles.heading2} text-white`}>
                            Need more independent deals ?{" "}
                        </h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
                            {" "}
                            Don’t need subscription ? We also have many independent
                            deals that you may be interested in.{" "}
                        </p>
                    </div>
                    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                        <Button styles={"bg-darkGreen"} content="Get Started" />
                    </div>
                </section>
            )}
        </InView>
    );
};

export default CTA;
