import React from 'react'
export default function Textarea(props){
  return (
    <textarea
      {...props}
      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-brand-200"
    />
  )
}
