import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`button-gradient py-4 px-6 font-poppins rounded-[10px] font-semibold text-[18px] text-white outline-none ${styles}`} >
      Get Started
    </button>
  )
}

export default Button