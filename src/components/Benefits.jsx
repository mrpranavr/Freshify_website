import React from "react";
import { benefits } from "../constants";
import Button from "./Button";
import styles, { layout } from "../style";


const BenefitCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex ss:min-w-[526px] max-w-[700px] items-center flex-row p-4 rounded-[20px] ${index !== benefits.length - 1 ? 'mb-6' : 'mb-0'}`}>
      {/* <div className={`w-[75px] h-[75px] rounded-full ${styles.flexCenter}`}> */}
        <img src={icon} alt='icon' className="object-contain" />
      {/* </div> */}
      <div className='flex-flex-col flex-1 ml-5'>
        <h4 className="font-poppins font-semibold text-[18px] leading-[30px] mb-1 ">{title}</h4>
        <p className="font-poppins text-textBlack font-normal ss:text-[16px] text-[15px] leading-[24px] mb-1">{content}</p>
      </div>
    </div>
  )
}

const Benefits = () => {
    return (
        <section id="about" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h1 className={styles.heading2}>
                    You make a choice, <br className="sm:block hidden" />
                    and we do the shopping.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-[20px]`}>
                    With the right service, we can provide fresh, organic meat
                    and diary products right to your doorsteps. We never
                    compromise on quality.
                </p>
                <Button styles='mt-10 button-gradient' content='Get Started' />
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
              {benefits.map((benefit, index) => (
                <BenefitCard key={benefit.id} {...benefit} index={index} />
              ))}
            </div>
        </section>
    );
};

export default Benefits;
