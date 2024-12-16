import React from 'react'

const Card = ({ image, title, className }) => {
  return (
    <div className={`lg:mr-[8%]  max-lg:w-full ${className}`}>
      <div className='w-full mb-[30px] inline-flex justify-center'>
        <img src={image} alt="" className='w-16 h-16' />
      </div>
      <div className='text-center text-[#333]'>
        <p className='font-[Poppins] font-medium text-[26px]'>{ title }</p>
      </div>
    </div>
  )
}

export default Card
