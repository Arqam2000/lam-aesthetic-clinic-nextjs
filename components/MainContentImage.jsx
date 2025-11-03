import React from 'react'

const MainContentImage = (props) => {
  // console.log("props", props)
  return (
    <div className='bg-[url(/main-background-image.jpg)] bg-cover bg-center h-[200px] flex justify-center items-center'>
      <h1 className='text-3xl font-semibold mb-3 text-white'>{props.heading}</h1>
      {/* <p className='text-white text-xl font-semibold'>{props.content}</p> */}
    </div>
  )
}

export default MainContentImage
