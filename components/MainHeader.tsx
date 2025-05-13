'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // You can replace with your own icons or SVGs

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className='fixed z-10 w-full shadow-md'>
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:p-5 sticky top-0 bg-white z-50 gap-4 md:gap-0">
        {/* Top Bar: Logo + Menu Button */}
        <div className="flex justify-between w-full md:w-auto items-center">
          <Link href="/">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto cursor-pointer" />
          </Link>
          {/* Hamburger menu on small screens */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Middle Navigation Links */}
        <div
          className={`
            flex flex-col md:flex-row items-center gap-4 md:gap-8 
            ${menuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto
          `}
        >
          <a href="#explore">
            <span className='text-base md:text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 transition duration-200'>
              Explore
            </span>
          </a>
          <a href="#eligible">
            <span className='text-base md:text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 transition duration-200'>
              Eligibility
            </span>
          </a>
          <a href="#JD">
            <span className='text-base md:text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 transition duration-200'>
              Job Description
            </span>
          </a>
          <a href="#process">
            <span className='text-base md:text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 transition duration-200'>
              Hiring Process
            </span>
          </a>
        </div>

        {/* CTA Button (Always Visible) */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Link href="https://app.deepthought.education/dt-actualise/questions">
            <button className="text-sm font-semibold bg-[#0029FF] px-6 py-2 rounded-[.5rem] text-white hover:scale-105 hover:shadow-lg transition-all duration-500 w-full md:w-auto">
              Start Now
            </button>
          </Link>
        </div>
      </nav>
    </section>
  )
}

export default MainHeader
