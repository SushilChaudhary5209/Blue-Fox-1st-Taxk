import React from 'react'
import HomeEmail from './HomeEmail'

function HomeBlackBanner() {
  return (
    <div>
      <div className='w-full relative flex flex-col items-center'>
        <div className='w-full h-36'></div>
        <div className='w-full h-36 bg-[#F0F0F0]'></div>
        <div className='flex flex-col md:flex-row items-center justify-between w-[75%] absolute top-[20%] lg:top-[25%] mx-36 px-8 h-48 md:h-36 text-white bg-black rounded-lg'>
            <p className=' w-full md:w-1/2 font-bold text-xl xl:text-4xl'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            <div className='lg:my-4 py-2'>
                <HomeEmail />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBlackBanner
