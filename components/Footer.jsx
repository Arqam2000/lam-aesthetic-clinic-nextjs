'use client'
// import tlogo from "../assets/tlogo.png"
// import tlogo from "../assets/lam-aesthetic-studio-blue.avif"
// import locationLogo from "../assets/arrows.png"
// import phoneLogo from "../assets/telephone.png"
// import emailLogo from "../assets/letter.png"
import Link from "next/link"
import Image from "next/image"
import { Instagram } from "@deemlol/next-icons";

const Footer = () => {
    return (
        <footer className='relative'>
            <div className='flex flex-col mt-4 text-white '>
                <div className='bg-[#4B54AD] px-10 py-3 flex lg:justify-between flex-col lg:flex-row'>
                    {/* first portion */}
                    <div className='flex gap-4 flex-col lg:flex-row items-center lg:items-start'>
                        <div className='w-20'>
                            <Image src="/lam-aesthetic-studio-blue.avif" alt="Lam Aesthetics Clinic" className='' width={80} height={80}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className='font-semibold text-xl'>Lam Aesthetics Clinic</h1>
                            </div>
                            <div className='flex flex-col justify-center lg:gap-2 gap-3'>
                                <div className='flex items-center'>
                                    <div className='w-6'>
                                        <Image src="/arrows.png" alt="location" width={24} height={24}/>
                                    </div>
                                    <p className='text-sm'>53 High Ash Avenue<br />
                                        Alwoodley
                                        Leeds
                                        Ls17 8RS</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-6'>
                                        <Image src="/telephone.png" alt="phone" width={24} height={24}/>
                                    </div>
                                    <p className='text-sm'>07974230704</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='w-5'>
                                        <Image src="/letter.png" alt="email" width={20} height={20}/>
                                    </div>
                                    <p className='text-sm'>toobasharaf@aol.com</p>
                                </div>
                                <div>
                                    <Link href="https://www.instagram.com/lamaesthetic787" target="_blank"><Instagram size={24} color="#FFFFFF" /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* second portion */}
                    <div className='flex flex-col items-center lg:flex-row gap-2 my-3 lg:my-0 lg:items-start'>
                        <Link href="/" className='no-underline text-base mr-6'>Home</Link>
                        <Link href="/about-us" className='no-underline text-base mr-6'>About Us</Link>
                        <Link href="/treatments" className='no-underline text-base mr-6'>Treatments</Link>
                        <Link href="/prices" className='no-underline text-base mr-6'>Prices</Link>
                    </div>
                    {/* third portion */}
                    <div className='flex flex-col items-center lg:flex-row lg:items-start lg:gap-1 gap-3 '>
                        <div className='flex flex-col lg:gap-2 gap-3'>
                            <h1 className='text-xl font-semibold self-center lg:self-start'>Working Time</h1>
                            <p className='text-sm'>Mon, Wed, Fri: 2:00PM - 7:00PM</p>
                            <p className='text-sm'>Tue, Thu: 5:00PM - 7:00PM</p>
                        </div>
                        <Link href="/book-appointment" className='bg-white text-[#4B54AD] px-3 py-1 rounded-full font-medium'>Book Appointment</Link>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className='bg-[#4B54AD] h-10 flex items-center justify-center border-t border-t-gray-400'>
                    <p className='text-white text-sm'>Copyright © 2025 Aesthetics Studio</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
