

import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='w-full sticky top-0 bg-white shadow-md z-50'>
            <div className='py-4 px-4 flex w-[100%] items-center justify-between md:justify-center md:gap-2 lg:gap-4 xl:gap-6 '>

                {/* Hamburger Icon */}
                <div className='block md:hidden cursor-pointer' onClick={toggleMenu}>
                    <IoReorderThreeOutline size={24} />
                </div>

                <div className='text-4xl font-bold'>SHOP.CO</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 lg:gap-12">
                    <div>
                        <select id="options" name="options" className="border-gray-300">
                            <option value="mem">Men</option>
                            <option value="women">Women</option>
                            <option value="electronic">Electronic</option>
                        </select>
                    </div>
                    <div>On Sale</div>
                    <div>New Arrivals</div>
                    <div>Brands</div>
                </div>

                {/* Search and Icons */}
                <div className='flex gap-8 items-center'>
                    {/* Search bar for larger screens */}
                    <div className="relative w-48 lg:w-80 hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5">
                            <IoSearchSharp size={20} />
                        </div>
                    </div>
                    <FaCreditCard />
                    <CgProfile />
                </div>
            </div>

            {/* Search bar for small screens */}
            {/* <div className='md:hidden px-4 py-2'>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5">
                        <IoSearchSharp size={20} />
                    </div>
                </div>
            </div> */}

            {/* Mobile Menu */}
            <div className='bg-white shadow-md'>
                {menuOpen && (
                    <div className="flex flex-col gap-4 md:hidden text-left p-4 ">
                        <div>
                            <select id="options" name="options" className="border-gray-300">
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="electronic">Electroniv</option>
                            </select>
                        </div>
                        <div>On Sale</div>
                        <div>New Arrivals</div>
                        <div>Brands</div>
                    </div>
                )}
                {/* Search bar for small screens */}
                <div className='md:hidden px-4 py-2'>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5">
                            <IoSearchSharp size={20} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar;

