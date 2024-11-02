

import React, { useState, useEffect } from 'react';
import tshirtImage from '../../images/t-Shirt.png';

function RelatedProducts({ products }) {
    const [productStars, setProductStars] = useState({});

    useEffect(() => {
        // Initialize productStars state with the product stars
        const initialStars = products.reduce((acc, product) => ({
            ...acc,
            [product.id]: product.stars
        }), {});
        setProductStars(initialStars);
    }, [products]);

    const toggleStar = (productId, index) => {
        fetch(`http://localhost:5000/api/products/${productId}/stars`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ starIndex: index })
        })
            .then(response => response.json())
            .then(updatedProduct => {
                setProductStars(prevStars => ({
                    ...prevStars,
                    [productId]: updatedProduct.stars
                }));
            });
    };

    const getAverageRating = (stars) => {
        const filledStars = stars.filter(star => star).length;
        return (filledStars / stars.length) * 5;
    };

    return (
        <div className='mt-12 flex flex-col items-center '>
            <p className='font-extrabold text-4xl my-10'>YOU MIGHT ALSO LIKE</p>
            <div className='flex flex-wrap justify-between gap-6'>
                {products.slice(0, 4).map(product => (
                    <div key={product.id} className='w-[45%] xl:w-[22%] bg-[#F2F0F1] p-2 rounded-xl'>
                        <img className='w-full h-40 object-cover' src={tshirtImage} alt="T-Shirt" />
                        <div className='mt-4'>
                            <p className='font-medium'>{product.name}</p>
                            <div className='flex items-center gap-2 md:p-2'>
                                <div className='flex items-center gap-1 md:gap-2'>
                                    {productStars[product.id]?.map((isFilled, index) => (
                                        <div
                                            key={index}
                                            onClick={() => toggleStar(product.id, index)}
                                            className='relative w-3 h-3 md:w-6 md:h-6 cursor-pointer'
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`absolute inset-0 ${isFilled ? 'text-yellow-500' : 'text-gray-300'} fill-current`}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.18-.54L12 2 8.18 8.7 2 9.24l5.46 4.73L5.82 21z"
                                                />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <p className='text-sm'>{getAverageRating(productStars[product.id] || []).toFixed(1)}/5</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <p className='font-bold text-sm md:text-lg'>${product.price}</p>
                                <p className='font-bold text-sm md:text-lg text-gray-400'>${product.oldPrice}</p>
                                <div className='w-10 h-4 bg-red-300 rounded-full text-red-600 text-xs text-center'>
                                    {product.discount}%
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;
