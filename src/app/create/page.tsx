'use client'

import React, { useState } from 'react';

const BettingPage = () => {
  const [isLoading, setLoading] = useState(false);
const [isModalOpen, setModalOpen] = useState(false);
const [id, setId] = useState(23);
const [amount, setAmount] = useState(20);
const [handle, setHandle] = useState('gutybv.test');
const [team, setTeam] = useState('Manchester City');

const handleButtonClick = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setModalOpen(true);
  }, 2000); // 2000 ms = 2 segundos
};

  return (
    <div className="flex flex-col items-center justify-center p-4 pt-10 ">
      <p className='text-2xl text-center pb-6 font-poppins'>
        Your bet is almost on 
      </p>
      <div className="flex justify-between items-center mx-4 pb-8">
        <img src="./assets/city.png" alt="Team Logo" className="w-24 h-24" />
        <span className="text-xl text-white font-semibold px-4">VS</span>
        <img src="./assets/liverpool.png" alt="Team Logo" className="w-24 h-24" />
      </div>
      <div className="w-full max-w-xs">
        <label className="block text-white mb-2">Bet ID</label>
        <input
          type="text"
          value="23"
          readOnly
          className="w-full p-2 mb-4 bg-white border border-gray-400 rounded-md text-gray-700"
        />

        <label className="block text-white mb-2">Put your amount that you want to bet *</label>
        <input
          type="number"
          className="w-full p-2 mb-4 bg-white border border-gray-400 rounded-md text-gray-700"
          placeholder="Amount in USDT"
        />

        <label className="block text-white mb-2">Your Handle</label>
        <input
          type="text"
          value="gutybv.test"
          readOnly
          className="w-full p-2 mb-4 bg-white border border-gray-400 rounded-md text-gray-700"
        />

        <label className="block text-white mb-2">Your Team</label>
        <input
          type="text"
          value="Manchester City"
          readOnly
          className="w-full p-2 mb-4 bg-white border border-gray-400 rounded-md text-gray-700"
        />
      </div>
      <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins" onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Confirm'}
        
      </button>
      
    </div>
  );
};

export default BettingPage;
