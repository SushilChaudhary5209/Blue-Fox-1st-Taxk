
import React from 'react';

function Button({
  width = 'w-auto', 
  text = 'Shop Now', 
  bg = 'bg-black', 
  textColor = 'text-white', 
  borderColor = 'border-transparent',
  px = 'px-10',
  py = 'py-2',
  me = 'me-0',
  textSize = 'text-base',
  onClick // Add onClick prop
}) {
  return (
    <div>
      <button
        className={`${bg} ${textColor} ${borderColor} ${px} ${py} ${me} ${textSize} border-2 font-semibold rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${width}`}
        onClick={onClick} // Apply onClick handler
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

