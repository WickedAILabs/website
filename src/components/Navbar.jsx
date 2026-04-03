import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar(){
  return (
    <header className="border-b bg-white/90 sticky top-0 z-50 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex flex-col items-center py-4 px-4 gap-3">
        <Link to="/">
          <img src="/w1.png" alt="WickedAILabs logo" className="w-80 h-auto"/>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-brand-500' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-brand-500' : ''}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'text-brand-500' : ''}>Services</NavLink>
          <NavLink to="/rates" className={({isActive}) => isActive ? 'text-brand-500' : ''}>Rates</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-brand-500' : ''}>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}
