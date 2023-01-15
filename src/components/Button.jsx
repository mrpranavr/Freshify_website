import React from 'react'

const Button = ({styles, content}) => {
  return (
    <button type='button' className={`py-4 px-6 font-poppins rounded-[10px] font-semibold text-[18px] text-white outline-none ${styles}`} >
      {content}
    </button>
  )
}

export default Button