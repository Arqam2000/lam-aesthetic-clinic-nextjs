import React from 'react'
import preTreatmentLogo from "@/public/pre-treatment-session.png"
import treatmentLogo from "@/public/lam-aesthetic-treatment.png"
import postTreatmentLogo from "@/public/lam-aesthetic-post-treatment.avif"
import Image from 'next/image'

const WorkingPractice = () => {
    return (
        <section>
            <div className='lg:ml-16 ml-3 my-5 font-semibold'>
                <h1 className='text-3xl'>Our Working Practice</h1>
            </div>
            <div className='flex items-start justify-center flex-wrap sm:flex-nowrap gap-4'>
                <div className=' md:w-[25%] w-[70%] sm:w-1/3 p-3 shadow-md shadow-black sm:h-[470px] md:h-[450px] lg:h-[380px]'>
                    <div className='flex justify-center'>
                        <Image src="/pre-treatment-session.png" alt="Pre-Treatment Session" className='w-[170px]' width={170} height={170} />
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl mt-3 mb-1'>Pre-Treatment Session</h1>
                        <p className='text-justify'>Every treatment begins with a private consultation. Our specialists assess your concerns, examine your facial profile, and recommend the most suitable options for you</p>
                    </div>
                </div>
                <div className=' md:w-[25%] w-[70%] sm:w-1/3 p-3 shadow-md shadow-black sm:h-[470px] md:h-[450px] lg:h-[380px]'>
                    <div className='flex justify-center'>
                        <Image src="/lam-aesthetic-treatment.png" alt="Treatment" className='w-[170px]' width={170} height={170}/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl mt-3 mb-1'>Treatment</h1>
                        <p className='text-justify'>After your consultation, we move on to the treatment.  We take great care to make sure everything is done safely and to the highest standard. We want you to leave feeling confident and refreshed.</p>
                    </div>
                </div>
                <div className=' md:w-[25%] w-[70%] sm:w-1/3 p-3 shadow-md shadow-black sm:h-[470px] md:h-[460px] lg:h-[380px]'>
                    <div className='flex justify-center'>
                        <Image src="/lam-aesthetic-post-treatment.avif" alt="Post-Treatment Guidance" className='w-[170px]' width={170} height={170}/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl mt-3 mb-1'>Post-Treatment Guidance</h1>
                        <p className='text-justify'>After your consultation, we move on to the treatment.  We take great care to make sure everything is done safely and to the highest standard. We want you to leave feeling confident and refreshed.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WorkingPractice
