import React from 'react'
export default function Card({children, className=''}) {
  return (
    <div className={`p-6 border rounded-lg bg-white shadow-sm ${className}`}>
      {children}
    </div>
  )
}
