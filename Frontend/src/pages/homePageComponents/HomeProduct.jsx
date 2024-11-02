
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tshirtImage from '../../images/t-Shirt.png';

const HomeProduct = () => {
    const [products, setProducts] = useState([]);
    const [productStars, setProductStars] = useState({});
    const [showAllSection1, setShowAllSection1] = useState(false);
    const [showAllSection2, setShowAllSection2] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setProductStars(data.reduce((acc, product) => ({ ...acc, [product.id]: product.stars }), {}));
            });
    }, []);

    const toggleStar = (productId, index) => {
        fetch(`http://localhost:5000/api/products/${productId}/stars`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ starIndex: index })
        })
            .then(response => response.json())
            .then(updatedProduct => {
                setProducts(prevProducts => prevProducts.map(product =>
                    product.id === productId ? updatedProduct : product
                ));
                setProductStars(prevStars => ({
                    ...prevStars,
                    [productId]: updatedProduct.stars
                }));
            });
    };

    const getAverageRating = (stars) => {
        const filledStars = stars.filter(star => star).length;
        return (filledStars / stars.length) * 5; // Convert to a scale of 5
    };

    const productsToShowSection1 = showAllSection1 ? products : products.slice(0, 4);
    const productsToShowSection2 = showAllSection2 ? products : products.slice(0, 4);

    return (
        <div className='px-4 md:px-36 py-8'>
            <div className='w-full flex flex-col items-center'>
                <p className='font-extrabold text-4xl my-10'>NEW ARRIVALS - Section 1</p>
                <div className='flex flex-wrap justify-between gap-6 w-full'>
                    {productsToShowSection1.map(product => (
                        <div key={product.id} className='w-[45%] xl:w-[22%] bg-[#F2F0F1] p-2 rounded-xl'>
                            <Link to={`/product/${product.id}`}>
                                <img className='w-full h-40 object-cover' src={tshirtImage} alt="T-Shirt" />
                            </Link>
                            <div className='mt-4 text1'>
                                <p className='font-medium'>{product.name}</p>
                                <div className='flex items-center gap-2 md:gap-4'>
                                    <div className='flex items-center gap-0 md:gap-2'>
                                        {productStars[product.id]?.map((isFilled, index) => (
                                            <div
                                                key={index}
                                                onClick={() => toggleStar(product.id, index)}
                                                className='relative w-4 h-4 md:w-6 md:h-6 cursor-pointer'
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
                                    <p className='text-[10px] md:text-[16px]'>{getAverageRating(productStars[product.id] || []).toFixed(1)}/5</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='font-bold text-sm md:text-lg'>${product.price}</p>
                                    <p className='font-bold text-sm md:text-lg text-gray-400'>${product.oldPrice}</p>
                                    <div className='w-10 h-4 bg-red-300 rounded-full text-red-600 text-[9px] md:text-[10px] text-center'>
                                        {product.discount}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-6'>
                    {!showAllSection1 && products.length > 4 && (
                        <button
                            onClick={() => setShowAllSection1(true)}
                            className="text-black border-2 border-slate-300 font-semibold py-2 px-10 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            View All
                        </button>
                    )}
                </div>
            </div>

            <hr className="border-t-2 border-gray-300 my-12" />

            <div className='flex flex-col items-center'>
                <p className='font-extrabold text-4xl my-10'>NEW ARRIVALS - Section 2</p>
                <div className='flex flex-wrap justify-between gap-6 w-full'>
                    {productsToShowSection2.map(product => (
                        <div key={product.id} className='w-[45%] xl:w-[22%] bg-[#F2F0F1] p-2 rounded-xl'>
                            <Link to={`/product/${product.id}`}>
                                <img className='w-full h-40 object-cover' src={tshirtImage} alt="T-Shirt" />
                            </Link>
                            <div className='mt-4 text1'>
                                <p className='font-medium'>{product.name}</p>
                                <div className='flex items-center gap-2 md:gap-4'>
                                    <div className='flex items-center gap-0 md:gap-2'>
                                        {productStars[product.id]?.map((isFilled, index) => (
                                            <div
                                                key={index}
                                                onClick={() => toggleStar(product.id, index)}
                                                className='relative w-4 h-4 md:w-6 md:h-6 cursor-pointer'
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
                                    <p className='text-[10px] md:text-[16px]'>{getAverageRating(productStars[product.id] || []).toFixed(1)}/5</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='font-bold text-sm md:text-lg'>${product.price}</p>
                                    <p className='font-bold text-sm md:text-lg text-gray-400'>${product.oldPrice}</p>
                                    <div className='w-10 h-4 bg-red-300 rounded-full text-red-600 text-[9px] md:text-[10px] text-center'>
                                        {product.discount}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-6'>
                    {!showAllSection2 && products.length > 4 && (
                        <button
                            onClick={() => setShowAllSection2(true)}
                            className="text-black border-2 border-slate-300 font-semibold py-2 px-10 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            View All
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
