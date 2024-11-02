import React from 'react'
import Button from '../../components/Button'
import tshirtImage from '../../images/t-Shirt.png';

function HomeProfile() {
    return (
        <>
            <div className='w-full flex flex-col lg:flex-row bg-[#F2F0F1]'>
                <div className='flex flex-col gap-6 w-full lg:w-1/2 px-4 md:ps-36'>
                    <div className='mt-12 md:mt-24 text-3xl md:text-6xl font-bold'>FIND COLTHES THAT MATCHES YOUR STYLE</div>
                    <div className='text-gray-400'>Browser throut our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sence of style.</div>
                    <div className=''>
                        {/* <Button /> */}
                        <Button width="w-full md:w-auto" />
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <div>
                            <p className='text-xl font-bold'>200+</p>
                            <p className='text-gray-400 text-sm'>International Brands</p>
                        </div>
                        <div className="h-13 w-px bg-gray-300 md:mx-4"></div>
                        <div>
                            <p className='text-xl font-bold'>2,000+</p>
                            <p className='text-gray-400 text-sm'>High-Quality Products</p>
                        </div>
                        <div className="h-13 w-px bg-gray-300 md:mx-4"></div>
                        <div>
                            <p className='text-xl font-bold'>30,000+</p>
                            <p className='text-gray-400 text-sm'>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full lg:w-1/2 lg:h-full px-4 md:ps-36 bg-slate-500'>
                    
                </div>
            </div>
            <div className='py-6 flex gap-4 justify-evenly flex-wrap md:text-2xl lg:text-4xl font-bold bg-black text-white'>
                <p>VERSACE</p>
                <p>ZARA</p>
                <p>GUCCI</p>
                <p>PRADA</p>
                <p>Calvin Klein</p>
            </div>
        </>
    )
}

export default HomeProfile
