import React from 'react'

const UpperHeader = () => {
  return (
    <div className=' flex items-center justify-center h-[48px] w-full bg-[#000000] pt-3 pb-3 gap-32'>
        <span className='text-white'>Summer sale for All Swim Suits And Free Express Delivary - OFF 50%! 
      <a className='mx-7 underline' href="/home">ShopNow</a></span>
      <select className='bg-[#000000] text-white mx-10'>
        <option value="english">English</option>
      </select>
    </div>
  )
}

export default UpperHeader






