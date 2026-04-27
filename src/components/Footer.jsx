import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="border-t py-8 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-70">
          © {new Date().getFullYear()} WickedAILabs. All rights reserved.
        </p>
        <div className="flex gap-6 opacity-70">
          <Link to="/about" className="hover:opacity-100 min-h-[48px] flex items-center py-2 px-3">About</Link>
          <Link to="/services" className="hover:opacity-100 min-h-[48px] flex items-center py-2 px-3">Services</Link>
          <Link to="/contact" className="hover:opacity-100 min-h-[48px] flex items-center py-2 px-3">Contact</Link>
          <a href="mailto:enquiries@wickedailabs.com" className="hover:opacity-100 min-h-[48px] flex items-center py-2 px-3">enquiries@wickedailabs.com</a>
        </div>
      </div>
    </footer>
  )
}
