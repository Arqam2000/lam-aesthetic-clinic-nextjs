import Image from 'next/image'
import React from 'react'
import MainContentImage from '@/components/MainContentImage';

export const metadata = {
  title: "Aesthetic Treatments in Leeds UK | Dermal Fillers, Botox & Profhilo",
  keywords: "lip fillers, wrinkle , anti wrinkle, anti-wrinkle, botox, dermal , dermal filler, dermal filler leeds, profhilo, profhilo leeds, eyebrow lift, eyebrow lift leeds, bunnylines, bunnylines leeds, non-surgical, eyebrows, skin , hyaluronic, skin treatment, skin treatment leeds, anti wrinkle injections, anti wrinkle injections leeds, lip, aesthetic in leeds, Botox Leeds, Lip filler Leeds, best price, aesthetic treatments, Botox injections, anti-wrinkle procedure, lip filler, Botox injections leeds, anti-wrinkle procedure leeds"
};

const page = () => {
  return (
    <>
      <MainContentImage content="Our Treatments" />
      <div className='md:h-[272px] text-center flex flex-col gap-4 md:flex-row items-center md:justify-evenly md:items-center mx-5'>
        <div className='flex flex-col items-center md:w-1/2 md:ml-9'>
          <h1 className='text-4xl font-semibold mb-4'>Treatments</h1>
          <p className='text-justify'>"After a consultation, Lam Aesthetic Clinic offers a wide range of treatments—from anti-wrinkle procedures for both women and men, to dermal and lip fillers, PRP, and skin boosters. We’re confident we have a treatment that will suit your needs and help you glow."</p>
        </div>
        <div className='md:w-[256px] w-[250px]'>
          <Image src="/lam-aesthetic-treatments.jpg" alt="Aesthetic Treatment Leeds UK" className='w-full h-full' width={256} height={20} />
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Lip Fillers</h1>
          <p className='text-justify'>Lip fillers, also known as lip injections or lip augmentation, are a cosmetic procedure that uses injectable fillers, usually hyaluronic acid (HA), to enhance the volume, shape, and definition of the lips. These fillers can add plumpness, smooth out wrinkles around the mouth, and improve lip symmetry.
            Purpose:
            Lip fillers can be used to:
            Add volume and plumpness to thin lips.
            Define the lip border and improve the shape.
            Correct asymmetry and balance out lip proportions.
            Smooth out vertical lip lines (smoker's lines).
            Provide a more youthful appearance.</p>
        </div>
        <div className='md:w-[300px] w-[250px]'>
          <Image src="/lam-aesthetic-lip-fillers-treatment.jpg" alt="Lip Fillers Leeds UK" width={380} height={50} />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Anti-Wrinkle Injections</h1>
          <p className='text-justify'>Botulinum toxin is used to temporarily relax facial muscles, reducing the appearance of fine lines and wrinkles—most commonly on the forehead, around the eyes (crow’s feet), and frown lines. Results appear within days and last 3–4 months.</p>
        </div>
        <div className='md:w-[256px] w-[250px]'>
          <Image src="/botox-anti-wrinkle.png" alt="Botox and Anti-Wrinkle Injections Leeds UK" className='h-full w-full' width={250} height={50} />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Dermal Fillers</h1>
          <p className='text-justify'>Hyaluronic acid-based fillers restore lost volume, smooth out deeper lines, and enhance facial contours such as cheeks, lips, jawline, and nasolabial folds. Results are immediate and can last 6–18 months depending on the area treated.</p>
        </div>
        <div className='md:w-[256px] w-[250px]'>
          <Image src="/dermal-fillers.png" alt="Dermal Fillers Leeds UK" className='h-full w-full' width={250} height={50} />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Profhilo</h1>
          <p className='text-justify'>A revolutionary injectable skin treatment that hydrates and remodels the skin using pure hyaluronic acid. Unlike fillers, it spreads beneath the skin to improve tone, texture, and elasticity. Ideal for dull, ageing, or lax skin on the face, neck, or hands.</p>
        </div>
        <div className='md:w-[256px] w-[250px]'>
          <Image src="/profhilo.jpg" alt="Profhilo Treatment Leeds UK" className='h-full w-full' width={250} height={50} />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Non-Surgical Eyebrow Lift (Botox Brow Lift)</h1>
          <p className='text-justify'>A subtle lift of the eyebrows using Botox to relax specific muscles and open up the eye area, creating a refreshed and youthful appearance without</p>
        </div>
        <div className='md:w-[256px] w-[250px]'>
          <Image src="/eyebrowlift.png" alt="Eyebrow Lift Botox Leeds UK" className='h-full w-full' width={250} height={50} />
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 md:flex-row md:justify-around w-full my-3 md:w-[90%] md:mx-auto mt-8'>
        <div className='md:w-[35%] w-[80%]'>
          <h1 className='font-semibold text-3xl my-3'>Bunny lines treatment</h1>
          <p className='text-justify'>Bunny lines are small, slanting wrinkles that appear on either side of the nose, usually running from the bridge to the area immediately below the eye. They are often even more pronounced when girls laugh or smile.

            Recurring movement of these muscles in time can cause lines to form that remain visible even when the muscles are at rest.</p>
        </div>
        <div className='md:w-[256px] w-[200px] h-[250px]'>
          <Image src="/Bunnylines.png" alt="Bunny Lines Treatment Leeds UK" className='h-full w-full' width={250} height={50} />
        </div>

      </div>
    </>
  )
}

export default page
