import React from 'react'
import styles from '../style'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} sm:py-8 py-6`}>
    <div className='w-full justify-between items-center border-t-[2px] pt-6  border-solid border-t-[#999999]'>
        <p className='font-poppins text-textBlack sm:text-[18px] text-[16px] font-normal text-center leading-[27px]' >2023 Foodify. All Rights Reserved.</p>
    </div>
    </section>
  )
}

export default Footer