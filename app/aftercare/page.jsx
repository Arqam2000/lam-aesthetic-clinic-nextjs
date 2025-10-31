import React from 'react'
import MainContentImage from '../../components/MainContentImage'

const BeforeandAftercare = () => {
  return (
    <div className='flex-1 bg-gray-100'>
      <MainContentImage content="After care" />
      <div className='w-[90%] lg:w-1/2 mx-auto my-5'>
        <h1 className='font-semibold text-2xl'>Fillers and Anti Wrinkles Aftercare</h1>
        <p className='my-2 text-xl'>
          After your treatment, it’s important to follow some simple steps to reduce swelling and bruising.

          <span className='font-medium block text-xl my-3'>What to Do After Fillers and Anti Wrinkles</span>

          <li className="my-3">Wrap some ice in a clean cloth and gently place it on the treated area for about 10 minutes. You can repeat this every 30 minutes for the first 4 hours.
          </li>
          <li className="my-3">Drink lots of water to stay hydrated.</li>

          <li className="my-3">For the first 2 nights, sleep on your back with your head slightly raised using extra pillows.</li>

          <span className='font-medium block text-xl my-3'>What to Avoid After Fillers and Anti Wrinkles</span>

          <li className="my-3">Don’t put ice directly on your skin.</li>

          <li className="my-3">Avoid bending forward or lying flat for the first 4 hours.</li>

          <li className="my-3">Skip heavy exercise for 24 hours.</li>

          <li className="my-3">Avoid hot tubs, saunas, or swimming for 24 hours.</li>

          <li className="my-3">Take only lukewarm showers or baths (no hot water) for 24 hours.</li>

          <li className="my-3">Don’t drink alcohol or caffeinated drinks for 24 hours.</li>

          <li className="my-3">Avoid using skincare products or makeup for 24 hours.</li>

          <li className="my-3">Stay away from tanning beds or heat lamps for 72 hours.</li>

          <li className="my-3">Don’t take aspirin, ibuprofen, vitamin E, fish oil, or ginseng for 72 hours.</li>

          <li className="my-3">Wait 2 weeks before having facials, eyebrow threading, microneedling, laser, or IPL treatments.</li>

          <li className="my-3">Don’t touch or massage the treated area for 24 hours unless your practitioner advises otherwise.</li>

          <span className='font-medium block text-xl my-3'>When to Seek Medical Advice</span>

          Fillers and Anti Wrinkles are generally very safe, and serious problems are rare. However, call your practitioner if you notice increased swelling, redness, or pain after 24 hours.

          Seek urgent medical help if you experience:

          <li className="my-3">Trouble breathing or swallowing</li>

          <li className="my-3">Vision changes</li>

          <li className="my-3">Loss of bladder control</li>

          <li className="my-3">Blue or purple skin around the treated area</li>

          <li className="my-3">Severe pain</li>

          <li className="my-3">Skin in the treated area turning very pale</li>
        </p>
      </div>
    </div>
  )
}

export default BeforeandAftercare