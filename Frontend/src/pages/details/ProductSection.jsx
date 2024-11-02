

import React, { useState } from 'react';
import Button from '../../components/Button';
import WriteReview from '../../components/writeReview'; // Adjust path if needed

function ProductSection({ selectedSection, handleClick }) {
    const [showReviewForm, setShowReviewForm] = useState(false);

    const handleOpenReviewForm = () => {
        setShowReviewForm(true);
    };

    const handleCloseReviewForm = () => {
        setShowReviewForm(false);
    };

    return (
        <div className='whitespace-nowrap'>
            <div className='flex justify-around'>
                <p
                    onClick={() => handleClick('Product Details')}
                    className={`cursor-pointer text-xs sm:text-base md:text-lg px-2 py-2 ${selectedSection === 'Product Details' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                >
                    Product Details
                </p>
                <p
                    onClick={() => handleClick('Rating & Reviews')}
                    className={`cursor-pointer text-xs sm:text-base md:text-lg px-2 py-2 ${selectedSection === 'Rating & Reviews' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                >
                    Rating & Reviews
                </p>
                <p
                    onClick={() => handleClick('FAQs')}
                    className={`cursor-pointer text-xs sm:text-base md:text-lg px-2 py-2 ${selectedSection === 'FAQs' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                >
                    FAQs
                </p>
            </div>
            <div className='my-8 flex items-center justify-between'>
                <div>
                    <span className='font-bold text-lg lg:text-3xl'>All Reviews</span>
                    <span className='text-gray-500 text-xs'> (425) </span>
                </div>
                <div className='flex items-center justify-between gap-1 md:gap-4'>
                    <button className="p-1 md:p-2 bg-[#F2F0F1] rounded-full">
                        <select name="latest-options" id="latest-options" className="text-[8px] md:text-base text-center select-class bg-[#F2F0F1]">
                            <option value="latest1">Latest 1</option>
                            <option value="latest2">Latest 2</option>
                            <option value="latest3">Latest 3</option>
                        </select>
                    </button>
                    <div>
                        <Button
                            text="Write a Review"
                            width="w-auto"
                            px='px-4 md:px-10'
                            me="me-2"
                            textSize='text-[8px] md:text-base'
                            onClick={handleOpenReviewForm} // Ensure this is passed correctly
                        />
                    </div>
                </div>
            </div>
            {showReviewForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg relative">
                        <button onClick={handleCloseReviewForm} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">X</button>
                        <WriteReview onClose={handleCloseReviewForm} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductSection;
