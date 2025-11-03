import React from 'react'
import MainContentImage from '../../components/MainContentImage';

export const metadata = {
  // title: "Lam Aesthetic Clinic - About Us",
  title: "About Lam Aesthetic Clinic | Trusted Skin & Aesthetic Experts in Leeds UK",
};

const page = () => {
  return (
    <>
      <MainContentImage heading="About Us"
      // content="I am a dedicated aesthetic clinician with over 29 years of experience as a medical doctor and 6 years specialising in aesthetic medicine. My approach combines medical expertise with an eye for natural beauty, delivering safe, effective, and tailored treatments. I take pride in achieving consistently excellent results and building long-term trust with my clients."
      />
      <div className='h-[272px] lg:h-[330px] text-center flex items-center flex-1'>
        <div className='sm:w-3/4 md:w-1/2 mx-auto p-3 rounded-md'>
          {/* <h1 className='text-3xl font-semibold mb-3'>About Us</h1> */}
          <p className='text-justify'>I am a dedicated aesthetic clinician with over 29 years of experience as a medical doctor and 6 years specialising in aesthetic medicine. My approach combines medical expertise with an eye for natural beauty, delivering safe, effective, and tailored treatments. I take pride in achieving consistently excellent results and building long-term trust with my clients.</p>
        </div>
      </div>
    </>
  )
}

export default page
