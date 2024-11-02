
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import CheckButton from '../../components/CheckButton';
import RelatedProducts from './RelatedProduct';
import ProductSection from './ProductSection';

function DetailsBody() {
    const [selectedSection, setSelectedSection] = useState('Product Details');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the backend
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    const handleClick = (section) => {
        setSelectedSection(section);
    };

    const renderStars = () => {
        return (
            <div className='flex'>
                {[...Array(5)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.473 3.403 1.23-7.18-5.217-5.086 7.21-1.048L12 1.5l3.25 6.84 7.21 1.048-5.217 5.086 1.23 7.18L12 17.25z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className='w-full px-4 md:px-36'>
            <ProductSection selectedSection={selectedSection} handleClick={handleClick} />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {[...Array(8)].map((_, index) => (
                    <div key={index} className='p-4 rounded-xl border'>
                        <div className='flex flex-col'>
                            {renderStars()}
                            <div className='flex items-center mt-2'>
                                <span className='font-bold'>Sushil{index}</span>
                                <CheckButton />
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita maxime officia magnam? Unde, voluptatum, sequi laborum quod voluptate modi neque non iure, explicabo error asperiores? Reiciendis placeat incidunt neque.</p>
                        <p>Posted on August 21, 2024</p>
                    </div>
                ))}
            </div>
            <div className='my-8 flex justify-center items-center'>
                <Button
                    text="Load more reviews"
                />
            </div>

            {/* Use the RelatedProducts component */}
            <RelatedProducts products={products} />
        </div>
    );
}

export default DetailsBody;

