'use client'
import React from 'react'
// const Slider = React.lazy(() => import('@/components/Slider.jsx'))
import Slider from '@/components/Slider.jsx'
import Services from '@/components/Services.jsx'
import WorkingPractice from '@/components/WorkingPractice.jsx'
import CustomerReviews from '@/components/CustomerReviews.jsx'
// import { useNavigate } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react'
import axios from 'axios'
import { Star } from "lucide-react";
import {ElfsightWidget} from "react-elfsight-widget"
import Link from 'next/link'

const Home = () => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null);
  // const navigate = useNavigate()

  const getReviews = async () => {
    try {
      const resp = await axios.get("https://lam-backend-sooty.vercel.app/api/v1/reviews/get-reviews")
      if (resp.data.success) {
        setReviews(resp.data.data)
        console.log(resp.data.data)
      }

    } catch (error) {
      setError(error.response.data.message)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div>
      {/* <Suspense fallback={<p className='text-center mt-4 text-xl font-semibold'>Loading...</p>}> */}
        <Slider />
      {/* </Suspense> */}
      <div className='md:mx-14 mt-9 bg-gray-100 p-4'>
        <h1 className='text-3xl mb-2 text-center'>Best Aesthetics Skin Care Clinic Leeds UK</h1>
        <p className='text-justify text-lg'>We are one of the best leading clinic for tailored non-surgical cosmetic treatments in Leeds. We specialize in personalized aesthetics treament designed to meet your unique skin goals. Enjoy a free, no-obligation skin consultation with our expert skincare specialists team and experience the highest standards of care in the most exclusive day spa setting — all while keeping treatments affordable and accessible. We are best known for Botox, Lip Fillers, Dermal Fillers, Anti Wrinkles, Eyebrows Lift, Bunny lines treatment, Profhilo/skin booster Treatment, Hayfever vaccine and Dissolving filler injection.</p>
      </div>
      <Services />
      <WorkingPractice />
      <section className='flex flex-col items-center gap-5 mt-4 w-full'>
        <h1 className='text-2xl font-semibold'>Customer Reviews</h1>
        {/* <div className='w-[90%] flex flex-col lg:flex-row justify-center gap-3 flex-wrap'>
          {reviews.slice(0, 4).map((review) => (
            <div
              key={review.cr}
              className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition lg:w-1/3"
            >
              Header
              <div className="flex justify-between items-center ">
                <h3 className="text-xl font-bold text-gray-800">
                  {review.cname}
                </h3>
                <span className="text-sm text-gray-500">{review.rdate.split("T")[0]}</span>
              </div>
              <h3 className='text-lg font-semibold'>{review.remarks}</h3>
              Comment
              <p className="text-gray-600 mb-4 mt-2">{review.comment}</p>

              Rating
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={`${review.crate >= star
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div> */}
        {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
        {/* <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-56b8c461-b9e7-45ec-a046-b98e4088c080" data-elfsight-app-lazy></div> */}
        <ElfsightWidget widgetId="56b8c461-b9e7-45ec-a046-b98e4088c080" />
        {/* <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25614811' frameborder='0' width='100%' height='1000'></iframe> */}
         <Link href="/reviews" className='bg-blue-500 py-1 px-2 rounded text-white w-fit self-center text-xl cursor-pointer'>More Reviews</Link>
      </section>
    </div>
  )
}

export default Home
