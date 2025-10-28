'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Star } from "lucide-react";
// import { useLocation } from 'react-router-dom';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null);
    // const location = useLocation();
    // console.log(location)

    const iframeStyles = {
        border: "none",
        visibility: "visible",
        width: "500px",
        height: "330px"
    }

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
        // <div>
        //     <div className='lg:ml-16 ml-3 my-5 font-semibold'>
        //         <h1 className='text-3xl'>Customer Reviews</h1>
        //     </div>

        //     <div className='flex flex-col md:flex-row gap-4 w-[80%] mx-auto mt-5'>
        //         <div className=' md:w-1/3 border p-2'>
        //             <div className='flex items-center gap-2'>
        //                 {/* <div><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/274697342_10226874970330482_1349256615543967301_n.jpg?stp=cp0_dst-jpg_s50x50_tt6&_nc_cat=100&ccb=1-7&_nc_sid=28885b&_nc_ohc=jB5CcLzTQawQ7kNvwFEpSMD&_nc_oc=AdlH1gHUP14rTANtVAOwOyXl2SA5R3J9KDQgZV-TyOcaCdYTCs6E0hhSHrgcND5UKrEZJSc55e1G6s82QeYm-uwM&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&edm=AN6CN6oEAAAA&_nc_gid=EGE6xWNEBrvmxj6u42xvyg&oh=00_AfUblU_O2g9KHnollaOVI5q8euaf2CaPB3KDzUUn_tXPKQ&oe=68968869" className='rounded-full' /></div> */}
        //                 <h1 className='text-xl font-semibold'>Inga Kadelskaite</h1>
        //             </div>
        //             <div className='mt-3'>
        //                 <p>Lam Aesthetic Studio makes magic,absolutely love my lips, feel so special. I'll be back for sure. Best recommendations.Thank you so much,you are the best</p>
        //             </div>
        //         </div>
        //         <div className=' md:w-1/3 border p-2'>
        //             <div className='flex items-center gap-2'>
        //                 {/* <div><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-1/391729560_10231996679397745_2321369206786546237_n.jpg?stp=cp0_dst-jpg_s50x50_tt6&_nc_cat=106&ccb=1-7&_nc_sid=28885b&_nc_ohc=X9vQmw8gplEQ7kNvwHj4CO7&_nc_oc=AdmAzXpRIrAbk3RWzyuTvbAs2k0kOpuxn1tzTTvesUQ8LXBxLcHkyf-M-h_r_CCwbkZe9Nz9f_JS9GTyCitYHRmT&_nc_zt=24&_nc_ht=scontent.fkhi2-3.fna&edm=ANzqmoQEAAAA&_nc_gid=bW7IlWP9FlXqPGKbwwRM6Q&oh=00_AfUtnsX0vfD0XSxL8fb2oORSQFiRqpxlER755mYFI2MiEg&oe=68967EF3" className='rounded-full' /></div> */}
        //                 <h1 className='text-xl font-semibold'>Claire Kavanagh</h1>
        //             </div>
        //             <div className='mt-3'>
        //                 <p>y review here.

        //                     I highly recommend for lip filler. Today was my first time having my lips done. Im so happy with them, I love how they look. 😀</p>
        //             </div>
        //         </div>
        //         <div className=' md:w-1/3 border p-2'>
        //             <div className='flex items-center gap-2'>
        //                 {/* <div><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/504449217_10163008028646598_6663001022665032300_n.jpg?stp=cp0_dst-jpg_s50x50_tt6&_nc_cat=105&ccb=1-7&_nc_sid=28885b&_nc_ohc=wj3EZyAKm4sQ7kNvwGIvGDB&_nc_oc=AdnzOfCdhs_6P6d7TBPQachm1ZfPX9r8j8EG5teJH_lcGE2S-3t7i1rb9Ay0a1TGAfCKISHFmtWNBdYZx59RlEi8&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&edm=ANzqmoQEAAAA&_nc_gid=cCMRXvP0a2V03K-jBoguOg&oh=00_AfUh-dIiSzNi-6kxr7LqGk4kcWyDbrNcozrh0_oZH8Yq2g&oe=68968744" className='rounded-full'/></div> */}
        //                 <h1 className='text-xl font-semibold'>Sarah McDonald</h1>
        //             </div>
        //             <div className='mt-3'>
        //                 <p>I love the final results. I have a top lip now so I can wear lipstick and it looks good 😊.
        //                     Beautiful results</p>
        //             </div>
        //         </div>
        //         <div className=' md:w-1/3 border p-2'>
        //             <div className='flex items-center gap-2'>

        //                 <h1 className='text-xl font-semibold'>Kate Brennan</h1>
        //             </div>
        //             <div className='mt-3'>
        //                 <p>I had previously gotten Botox in my upper lip to prevent my gummy smile/lip curling when I smiled and lip filler to enhance my lips. I am delighted with the outcome! I would highly recommend to anyone that is interested in any non-invasive cosmetic treatments. Thank you so much for everything!</p>
        //             </div>
        //         </div>

        //     </div>
        // </div>

        <>
            <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
                <div className="w-full max-w-3xl space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Customer Reviews
                    </h2>
                    {/* <div className='flex gap-3'> */}
                        {reviews.map((review) => (
                            <div
                                key={review.cr}
                                className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition "
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {review.cname}
                                    </h3>
                                    <span className="text-sm text-gray-500">{review.rdate.split("T")[0]}</span>
                                </div>
                                <h3 className='text-lg font-semibold'>{review.remarks}</h3>
                                {/* Comment */}
                                <p className="text-gray-600 mb-4">{review.comment}</p>

                                {/* Rating */}
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
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default CustomerReviews
