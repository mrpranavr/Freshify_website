import React from 'react'
import styles from '../style'
import { hero, customerImg, instagram, telegram, facebook, star } from '../assets'
import Button from './Button'

const Hero = () => {
  return (
    <section id='home' className={`flex lg:flex-row flex-col ${styles.paddingY}`} >

      <div className={`xl:flex-[1.25] flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-16 sm:pr-0 px-6 `}>
        <h1 className='font-poppins font-bold ss:text-[72px] xs:text-[55px] text-[42px] ' >
          Never compromise <br className='sm:block hidden' />
          on freshness.<br/>{" "}
          <span className='text-gradient__green' >Go </span>
          <span className='text-gradient__orange' >Freshify !</span>
        </h1>
        
        <Button styles='ss:mt-[60px] mt-10' />

        <div className={`ss:mt-[87px] mt-10 flex flex-row ss:gap-[64px] gap-[50px] items-center justify-start`} >
          <p className='font-poppins font-medium ss:text-[20px] text-[16px]' >Follow us</p>
          <div className='flex justify-between ss:min-w-[220px] min-w-[150px]' >
            <a href='instagram'>
              <img src={instagram} alt='instagram' className='ss:w-[30px] w-[22px] ss:h-[30px] h-[22px] object-contain ' />
            </a>
            <a href='telegram'>
              <img src={telegram} alt='telegram' className='ss:w-[30px] w-[22px] ss:h-[30px] h-[22px] object-contain ' />
            </a>
            <a href='facebook'>
              <img src={facebook} alt='facebook' className='ss:w-[30px] w-[22px] ss:h-[30px] h-[22px] object-contain ' />
            </a>
          </div>
        </div>

        <div className='flex flex-row mt-[35px]'>
          <img src={customerImg} alt='customers' className='ss:w-[136px] w-[110px] object-contain' />

          <div className='ml-4 flex flex-col justify-center gap-[5px]'>
            <p className='font-poppins font-semibold text-[15px] leading-[22px]'>Our happy customers</p>

            <div className='flex flex-row items-center'>
              <div className='flex'>
                <img src={star} alt='star' />
                <p className='font-poppins font-semibold ml-[5px] text-[13px]'>4.8</p>
              </div>
              <p className='font-poppins text-[13px] ml-[10px] text-lightRed' >(1280 reviews)</p>
            </div>

          </div>
        </div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative]`}>
        <img src={hero} alt='hero' className='z-[5] lg:w-[100%] w-[634px]' />
      </div>
    </section>
  )
}

export default Hero