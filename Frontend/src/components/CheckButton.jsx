import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const CheckButton = () => {
    return (
        <button
            className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500"
        >
            <IoMdCheckmark className="text-white text-2xl" />
        </button>
    );
};

export default CheckButton;
