
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tshirtImage from '../../images/t-Shirt.png';
import Button from '../../components/Button';

const DetailProfile = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('Small'); // Default selected size
    const [selectedColor, setSelectedColor] = useState('bg-slate-500'); // Default selected color
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const getAverageRating = (stars) => {
        if (!stars || stars.length === 0) return 0;
        const filledStars = stars.filter(star => star).length;
        return (filledStars / stars.length) * 5; // Convert to a scale of 5
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className='w-full mt-8 px-4 md:px-36 flex flex-col lg:flex-row gap-12'>
            <div className='w-full lg:w-[50%] flex flex-col-reverse lg:flex-row gap-[5%]'>
                <div className='w-full lg:w-[30%] flex justify-center items-center lg:flex-col gap-2'>
                    <div className='p-2 bg-[#F2F0F1] rounded-xl'>
                        <img src={tshirtImage} alt="T-shirt" />
                    </div>
                    <div className='p-2 bg-[#F2F0F1] rounded-xl'>
                        <img src={tshirtImage} alt="T-shirt" />
                    </div>
                    <div className='p-2 bg-[#F2F0F1] rounded-xl'>
                        <img src={tshirtImage} alt="T-shirt" />
                    </div>
                </div>
                <div className='w-full lg:w-[65%] my-4 lg:my-0 flex items-center justify-center bg-[#F2F0F1] rounded-2xl'>
                    <img src={tshirtImage} alt="T-shirt" />
                </div>
            </div>
            <div className='w-full lg:w-[50%]'>
                <div>
                    <p className="text-xl lg:text-4xl font-extrabold">
                        {product.name}
                    </p>
                    <div className="flex space-x-1 my-2">
                        {/* Rating stars */}
                        {Array(5).fill(0).map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className={`w-6 h-6 ${product.stars[index] ? 'text-yellow-500' : 'text-gray-300'}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5l2.09 4.26 4.7.68-3.4 3.31.8 4.67-4.19-2.2-4.19 2.2.8-4.67L5.21 9.44l4.7-.68L12 4.5z" />
                            </svg>
                        ))}
                        <div>
                            <span>{getAverageRating(product.stars || []).toFixed(1)}/</span>
                            <span className='text-slate-400'>5</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <p className='font-bold text-sm md:text-lg'>${product.price}</p>
                            <p className='font-bold text-sm md:text-lg text-gray-400'>${product.oldPrice}</p>
                            <div className='w-10 h-4 bg-red-300 rounded-full text-red-600 text-[9px] md:text-[10px] text-center'>
                                {product.discount}%
                            </div>
                        </div>
                        <p>{product.description}</p>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-6" />
                    <div className='flex flex-col gap-2'>
                        <p>Color select</p>
                        <div className="flex space-x-2">
                            {['bg-slate-500', 'bg-green-500', 'bg-rose-500'].map(color => (
                                <div
                                    key={color}
                                    onClick={() => handleColorChange(color)}
                                    className={`w-6 h-6 rounded-full cursor-pointer ${color} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-6" />
                    <div className='flex flex-col gap-2'>
                        <p>Choose Size</p>
                        <div className="flex items-center gap-1">
                            {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                                <div
                                    key={size}
                                    onClick={() => handleSizeChange(size)}
                                    className={`cursor-pointer px-3 md:px-4 py-2 border-2 rounded-full text-xs md:text-sm xl:text-base text-center ${selectedSize === size ? 'border-cyan-700 bg-cyan-100' : 'border-gray-300'}`}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-6" />
                    <div className='flex'>
                        <div className='w-[25%] py-2 px-2 flex items-center justify-evenly rounded-full bg-[#F2F0F1]'>
                            <span
                                className='cursor-pointer text-xl'
                                onClick={handleDecrease}
                            >
                                -
                            </span>
                            <span className='text-sm md:text-xl'>{quantity}</span>
                            <span
                                className='cursor-pointer text-xl'
                                onClick={handleIncrease}
                            >
                                +
                            </span>
                        </div>

                        <div className='w-[70%] flex justify-center items-center'>
                            <Button
                                text="Add to Card"
                                width="w-auto"
                                textSize = 'text-sm md:text-base'
                            />
                        </div>
                        {/* <div className='w-[70%] flex justify-center items-center'>
                            <button
                                text="Add to Cart"
                                width="w-auto"
                                className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600'
                            >
                                Add to Cart
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProfile;

