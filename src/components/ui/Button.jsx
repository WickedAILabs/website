import React from 'react'
export default function Button({children, className='', ...props}){
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md bg-brand-500 text-white hover:bg-brand-600 focus:outline-none ${className}`}
    >
      {children}
    </button>
  )
}
