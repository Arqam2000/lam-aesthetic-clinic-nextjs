import Link from 'next/link'
import React from 'react'
import MainContentImage from '../../components/MainContentImage';

export const metadata = {
  // title: "Lam Aesthetic Clinic - Prices",
  title: "Aesthetic Treatment Prices Leeds | Affordable Skin & Filler Packages UK",
  keywords: "lam aesthetic prices, best price, lowest price, lip fillers price, wrinkle price , anti wrinkle price, anti-wrinkle price, botox price, dermal price, dermal fillers price,profhilo price, eyebrow lift price, bunnylines price",
  alternates: {
    canonical: "https://www.lamaesthetic.co.uk/prices",
  },
  
};

const page = () => {
  return (
    <div>
      <MainContentImage content="Some content" heading="Prices"/>
      <div className='lg:w-[76%] w-[90%] mx-auto flex flex-col items-center p-3 mt-3 bg-[#00000005]'>
        {/* <div className='pb-5 border-b border-b-[#dcbae3] w-full text-center'>
          <h1 className='lg:text-3xl text-2xl font-bold font-sans'>Prices</h1>
        </div> */}
        <div className='p-3 pt-0 px-0 mx-20 w-full'>
          <div className='flex justify-between items-center p-3 border-b border-b-[#dcbae3]'>
            <div>
              <h2 className='font-semibold'>Free Consultation</h2>
            </div>
            {/* <div><p>£155 / £200</p></div> */}
            <div><p></p></div>
          </div>
          <div className='flex justify-between items-center p-3 border-b border-b-[#dcbae3]'>
            <div>
              <h2 className='font-semibold'>Lip Fillers</h2>
              <p>Juvederm (0.5/1ml)</p>
            </div>
            {/* <div><p>£155 / £200</p></div> */}
            <div><p>£180</p></div>
          </div>

          <div className='flex justify-between items-center p-3 border-b border-b-[#dcbae3]'>
            <div>
              <h2 className='font-semibold'>Derma Fillers</h2>
              <p>Nasolabial Lines (nose to mouth)</p>
              <p>Frown Line</p>
              <p>Marionette Line (outer corner of mouth to chin)</p>
            </div>
            <div>
              <p>£200</p>
              <p>£150</p>
              <p>£150</p>
            </div>
          </div>

          <div className='flex justify-between items-center p-3 border-b border-b-[#dcbae3]'>
            <div>
              <h2 className='font-semibold'>Anti Wrinkles</h2>
              <p>Eyebrows Lift</p>
              <p>Bunny lines treatment</p>
              <p>1 area</p>
              <p>2 areas</p>
              <p>3 areas</p>
            </div>
            <div>
              <p>£150</p>
              <p>£150</p>
              <p>£150</p>
              <p>£180</p>
              <p>£210</p>

            </div>
          </div>


          <div className='flex justify-between items-center p-3 border-b border-b-[#dcbae3]'>
            <div>
              <h2 className='font-semibold'>Profhilo Treatment</h2>
              <p>Profhilo discount price</p>
            </div>
            <div>
              <p>£190 (was £275)</p>
            </div>
          </div>

          <div className='flex justify-between items-center p-3 border-b border-b-[#dcbae3]'>
            <div>
              <h2 className='font-semibold'>Hayfever vaccine</h2>

            </div>
            <div><p>£65</p></div>
          </div>
          <div className='flex justify-between items-center p-3 border-b border-b-[#dcbae3]'>
            <div>
              <h2 className='font-semibold'>Dissolving filler injection</h2>

            </div>
            <div><p>£150</p></div>
          </div>

        </div>
        <Link href="/book-appointment" className='bg-[#A64166] text-white rounded-full py-2 px-5 my-2'>Book Appointment</Link>
      </div>
    </div>
  )
}

export default page
