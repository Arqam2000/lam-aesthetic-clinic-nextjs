'use client'
import { useEffect, useState } from 'react'
// import tlogo from "../assets/tlogo-white.jpeg"
// import tlogo from "../assets/lam-aesthetic-studio.avif"
// import { Link } from 'react-router-dom'
import { usePathname } from "next/navigation";
import Link from 'next/link'
import "./navbar.css"
// import { useLocation } from 'react-router-dom'
import { ChevronDown } from "lucide-react";
import Image from 'next/image';

const navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = useState(false);

  // const location = useLocation()
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isActive])

  function toggle() {
    setIsActive(prev => !prev)

  }
  return (
    <>
      <nav className='flex justify-around items-center shadow p-0 m-0 py-4 h-20'>

        <div className='flex items-center gap-2'>
          <div><Image src="/lam-aesthetic-studio.avif" alt="Lam Aesthetics Clinic" className='w-16' width={64} height={64} loading='lazy' /></div>
          <h1 className='text-xl font-semibold'>Lam Aesthetics Clinic</h1>
        </div>

        <div className='hidden lg:flex '>
          <Link href="/" className='no-underline text-black text-base mr-5'>Home</Link>
          <Link href="/about-us" className='no-underline text-black text-base mr-5'>About Us</Link>
          <Link href="/treatments" className='no-underline text-black text-base mr-5'>Treatments</Link>
          <Link href="/aftercare" className='no-underline text-black text-base mr-5'>Before & Aftercare</Link>
          <Link href="/prices" className='no-underline text-black text-base mr-5'>Prices</Link>
          <div className='relative group'>
            <div className='no-underline text-black text-base mr-5 flex items-center'>
              Reviews <ChevronDown size={16} />
            </div>
            <div className="absolute left-0 top-6 w-40 bg-white text-gray-800 rounded-lg shadow-lg border opacity-0 group-hover:opacity-100 invisible group-hover:visible transition z-10">
                <Link href="/add-review" className="block px-4 py-2 hover:bg-blue-100">
                  Add Review
                </Link>
                <Link href="/reviews" className="block px-4 py-2 hover:bg-blue-100">
                  All Reviews
                </Link>
                <Link href="/appointments" className="block px-4 py-2 hover:bg-blue-100">
                  Appointments
                </Link>
              </div>
          </div>

          <Link href="/contact-us" className='no-underline text-black text-base '>Contact Us</Link>
        </div>

        <div className='hidden lg:block'>
          <Link href="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-5'>Book Appointment</Link>
        </div>
        <div className='lg:hidden z-10' id="menu" onClick={toggle}>
          <span className={`${isActive ? "text-white" : "text-black"} text-3xl`}>&equiv;</span>
        </div>

      </nav>

      {/* Mobile Menu */}
      <div className={`${isActive ? "active" : "hidden"} hidden`}>
        <Link href="/" className='no-underline text-base mr-5'>Home</Link>
        <Link href="/about-us" className='no-underline text-base mr-5'>About Us</Link>
        <Link href="/treatments" className='no-underline text-base mr-5'>Treatments</Link>
        <Link href="/prices" className='no-underline text-base mr-5'>Prices</Link>
        <div className='relative group'>
          <div className='no-underline text-base mr-5 flex items-center' onClick={() => setOpen(prev => !prev)}>
            Reviews <ChevronDown size={16} />
            {
              open && <div className="absolute left-0 top-6 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg border transition z-20">
                <Link href="/add-review" className="block px-4 py-2 hover:bg-blue-100">
                  Add Review
                </Link>
                <Link href="/reviews" className="block px-4 py-2 hover:bg-blue-100">
                  All Reviews
                </Link>
                <Link href="/appointments" className="block px-4 py-2 hover:bg-blue-100">
                  Appointments
                </Link>
              </div>
            }
          </div>
        </div>
        <Link href="/contact-us" className='no-underline text-base '>Contact Us</Link>
        <Link href="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-5'>Book Appointment</Link>
      </div>
    </>
  )
}

export default navbar
