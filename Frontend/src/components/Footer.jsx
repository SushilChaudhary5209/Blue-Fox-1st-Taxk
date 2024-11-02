
import React from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className='px-4 md:px-36 bg-[#F0F0F0]'>
            <div className='w-full flex flex-col sm:flex-row sm:flex-wrap gap-6 xl:gap-[2%]'>
                <div className='w-full sm:w-[48%] xl:w-[18%] pb-16 lg:pb-0 flex flex-col justify-center gap-4'>
                    <p className='text-3xl font-extrabold'>SHOP.CO</p>
                    <div className='text-gray-400'>We have clothes that suits your style and you're proud to wear. From women to men</div>
                    <div className='flex gap-2'>
                        <div className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-slate-300 bg-white'>
                            <GrFacebookOption />
                        </div>
                        <div className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-slate-300 bg-white'>
                            <AiFillInstagram />
                        </div>
                        <div className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-slate-300 bg-white'>
                            <FaTwitter />
                        </div>
                        <div className='w-10 h-10 flex justify-center items-center rounded-full border-2 border-slate-300 bg-white'>
                            <FaGithub />
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[48%] xl:w-[18%] pb-16 lg:pb-0 flex flex-col items-start'>
                    <p className='mb-6 text-lg font-semibold'>C O M P A N Y</p>
                    <div className='flex flex-col gap-4 text-gray-400'>
                        <p>About</p>
                        <p>Features</p>
                        <p>Work</p>
                        <p>Carrer</p>
                    </div>
                </div>
                <div className='w-full sm:w-[48%] xl:w-[18%] pb-16 lg:pb-0 flex flex-col items-start'>
                    <p className='mb-6 text-lg font-semibold'>H E L P</p>
                    <div className='flex flex-col gap-4 text-gray-400'>
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='w-full sm:w-[48%] xl:w-[18%] pb-16 lg:pb-0 flex flex-col lg:p-0 items-start'>
                    <p className='mb-6 text-lg font-semibold'>F A Q</p>
                    <div className='flex flex-col gap-4 text-gray-400'>
                        <p>Account</p>
                        <p>Manage Deliveries</p>
                        <p>Orders</p>
                        <p>Payments</p>
                    </div>
                </div>
                <div className='w-full sm:w-[48%] xl:w-[18%] flex flex-col lg:items-start '>
                    <p className='mb-6 text-lg font-semibold'>R E S O U R C E S</p>
                    <div className='flex flex-col gap-4 text-gray-400 '>
                        <p>Free Books</p>
                        <p>Development Tutorial</p>
                        <p>How to -Blog</p>
                        <p>Youtube Playlist</p>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-gray-300 my-12" />
            <div className='pb-8 text-center'>
            <p>Shop.co &copy; 2020-2024 Your Company Name. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
