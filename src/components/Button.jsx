import React from 'react'
import { forwardRef } from 'react'

const Button = forwardRef(({styles, content}, ref) => {
  return (
    <button ref={ref} type='button' className={`py-4 transition ease-in-out hover:scale-105 px-6 font-poppins rounded-[10px] font-semibold text-[18px] text-white outline-none ${styles}`} >
      {content}
    </button>
  )
})

export default Button