'use client'
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const metadata = {
  // title: "Book Appointment | Lam Aesthetic Clinic Leeds UK",
  title: "Book Aesthetic Appointment Leeds | Lam Aesthetic Clinic UK",
}

const BookAppointment = () => {
  const form = useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    date: ""
  })
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    // emailjs
    //   .sendForm('service_wy6ozsg', 'template_sd3r439', form.current, {
    //     publicKey: 'zwlM7yzr_0kZNiU9Y',
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //       toast.success("Appointment booked successfully")
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //       toast.error("Cannot booked the appointment")
    //     },
    //   );
    console.log("user", user)

    const date = new Date(user.date)
    const isoDate = date.toISOString()
    console.log("isoDate", isoDate)
    try {
      // const resp = await axios.post("http://localhost:3001/api/v1/appointment", {...user})
      const resp = await axios.post("https://lam-backend-sooty.vercel.app/api/v1/appointment", {...user})
      console.log(resp.data)

      if(resp.data.success){
        toast.success(resp.data.message)
      }
    } catch (error) {
      console.log("Error:",error)
      toast.error(error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <>
      <h1 className='text-3xl font-semibold text-center my-3 mb-7'>Appointment</h1>
      <ToastContainer />
      <div className='flex flex-1 lg:gap-20 gap-4 flex-col md:flex-row justify-center items-center md:items-start  my-5'>
        <div className='flex flex-col justify-center items-center md:items-start gap-4'>
          <div>
            <h1 className='text-[#333333] md:text-4xl text-2xl'>We would love to serve You.</h1>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-[#4a4a4a]'>Business Hours</h3>
            <p>Mon, Wed, Fri: 2:00PM - 7:00PM </p>
            <p>Tue, Thu: 5:00PM - 7:00PM </p>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
            <input type="text" placeholder='Name' className='outline p-1 px-3' name='Lname' required value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
            <input type="email" placeholder='Email' className='outline p-1 px-3' name='Email' required value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
            <input type="tel" placeholder='Phone' className='outline p-1 px-3' name='Phone' required value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})}/>
            <label htmlFor="" className='font-semibold'>Click here to select appointment date</label>
            <input type="datetime-local" name="time" id="myDateTimeInput" className='outline p-1 px-3' required  value={user.date} onChange={(e) => setUser({...user, date: e.target.value})}/>
            <button className='bg-[#A64166] text-white rounded-full py-2 cursor-pointer' type='submit'>{loading? "Loading...": "Save Appointment"}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookAppointment
