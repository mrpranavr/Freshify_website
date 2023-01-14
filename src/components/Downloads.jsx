import React from "react";
import styles, { layout } from "../style";
import { apple, google, phone } from "../assets";

const Downloads = () => {
    return (
        <section id="download" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img
                    src={phone}
                    alt="phone"
                    className="w-[100%] h-[100%] relative z-[5] "
                />
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Go shopping, no matter <br className="sm:block hidden" />
                    where you are.
                </h2>

                <p className={`${styles.paragraph} mt-[20px] max-w-[470px]`}>
                    Want to shop, but not at home ? No worries. We have our
                    Freshify app available for all your mobile devices. Shop
                    fresh, even on the go!
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6" >
                  <a href="apple-store">
                    <img src={apple} alt='apple-store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
                  </a>
                  <a href="play-store">
                    <img src={google} alt='play-store' className='w-[128px] h-[42px] object-contain cursor-pointer' />
                  </a>
                </div>
            </div>
        </section>
    );
};

export default Downloads;
