
import React, { useState } from 'react';
import Button from '../../components/Button';

const HomeEmail = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Basic Gmail validation
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (value && !gmailPattern.test(value)) {
      setError('Please enter a valid Gmail address');
    } else {
      setError('');
    }
  };

  return (
    <div className='flex flex-col items-center gap-2 md:gap-4'>
      <div className="flex flex-col">
        <label htmlFor="gmail" className="mb-2 text-sm font-medium text-gray-700">
        </label>
        <input
          type="email"
          id="gmail"
          value={email}
          onChange={handleChange}
          className={`border-2 py-2 px-3 rounded-full focus:outline-none text-[10px] lg:text-base text-red-400 focus:ring-2 focus:ring-slate-300 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="yourname@gmail.com"
        />
        {error && <span className="mt-2 text-sm text-red-600">{error}</span>}
      </div>
      <Button
        text="Subscribe to newsletter"
        bg="bg-white"
        textColor="text-black"
        borderColor="border-slate-300"
        width=""
        px="px-4"
        textSize="text-[10px] lg:text-base"
      />
    </div>
  );
};

export default HomeEmail;
