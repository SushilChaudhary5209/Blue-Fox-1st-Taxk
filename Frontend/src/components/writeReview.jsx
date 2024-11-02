

import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const StarRating = ({ rating, setRating }) => {
  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          onClick={() => handleClick(index)}
          className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
        </svg>
      ))}
    </div>
  );
};

const WriteReview = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Rating: ${rating}, Message: ${message}`);
    // Handle form submission logic here
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Rating:</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default WriteReview;
