'use client'
import Head from 'next/head';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

// Add additional imports as needed

export default function DefendYourTeam() {
  const [expanded, setExpanded] = useState(false);


  return (
    <>
      <Head>
        <title className='font-poppins'>Defend Your Team</title>
        
      </Head>
      
      <div className="text-white">
        

        <header className="text-center p-4">
          <h1 className="text-2xl font-bold font-poppins">Defend your team</h1>
        </header>

        <main className="p-4">
          
          

            <img src="./assets/city.png" alt="Team" className=" mx-auto w-40 p-0" />
          

          <section className="mt-4">
  <h2 className="text-2xl font-semibold mb-4 text-white font-poppins">Coming bets</h2>
  <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md ">
    <div  onClick={() => setExpanded(!expanded)}  className=" ${expanded ? 'scale-110' : 'scale-100'}">
    <div className="flex items-center ">
      <img src="./assets/perfilBen.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
      <div>
        <p className="font-semibold text-blue-800 font-poppins">Benjamin Gutierrez</p>
        <p className="text-sm text-blue-600 font-poppins">@gutybv.lens</p>
      </div>
      
    </div>
    <p className="my-2 text-gray-700 font-poppins">
      Challenge your team, defend it before it's too late!
    </p>
    <div className="flex justify-between items-center mx-4">
      <img src="./assets/city.png" alt="Team Logo" className="w-12 h-12" />
      <span className="text-lg text-gray-800 font-semibold">VS</span>
      <img src="./assets/liverpool.png" alt="Team Logo" className="w-12 h-12" />
    </div>
    <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
      Nov, 23th 2023
    </p>
    {expanded && (
        // Aquí va el contenido adicional que quieres mostrar cuando se hace clic
        <div>
        <div className="flex justify-between items-center mx 4">
          <div className='text-black  '>
          <ul className="flex flex-col">
        <li  className="p-2 font-poppins  pt-3 cursor-pointer transition-all duration-300 hover:scale-110">@shafu</li>
        <li className='text-red-400 font-poppins  pl-2'> 20 usdt</li>
          <li  className="p-2 pt-3 font-poppins  cursor-pointer transition-all duration-300 hover:scale-110">@daniel</li>
          <li className='text-red-400  font-poppins  pl-2'> 20 usdt</li>
          
        </ul>
            </div>
            <div className='text-black  '>
          <ul className="flex flex-col">
        <li  className="p-2 font-poppins  pt-3 cursor-pointer transition-all duration-300 hover:scale-110">@shafu</li>
        <li className='text-red-400 font-poppins  pl-2'> 20 usdt</li>
          <li  className="p-2 pt-3 font-poppins  cursor-pointer transition-all duration-300 hover:scale-110">@daniel</li>
          <li className='text-red-400  font-poppins  pl-2'> 20 usdt</li>
          <li  className="p-2 pt-3 font-poppins cursor-pointer transition-all duration-300 hover:scale-110">@stani</li>
          <li className='text-red-400 font-poppins  pl-2'> 20 usdt</li>
        </ul>
            </div>
           
        </div>
        <div>
              <p className='my-4 text-gray-700 font-poppins text-center font-light italic'>
We have an spot waiting for you!
              </p>
            </div>
        </div>
      )}
      </div>
    <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
      Join for 20 USDT
    </button>
  </div>

  <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md">
    <div className="flex items-center ">
      <img src="./assets/perfilBen.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
      <div>
        <p className="font-semibold text-blue-800 font-poppins">Benjamin Gutierrez</p>
        <p className="text-sm text-blue-600 font-poppins">@gutybv.lens</p>
      </div>
    </div>
    <p className="my-2 text-gray-700 font-poppins">
      Challenge your team, defend it before it's too late!
    </p>
    <div className="flex justify-between items-center mx-4">
      <img src="./assets/city.png" alt="Team Logo" className="w-12 h-12" />
      <span className="text-lg text-gray-800 font-semibold">VS</span>
      <img src="./assets/tottenham.png" alt="Team Logo" className="w-12 h-12 object-contain" />
    </div>
    <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
      Nov, 23th 2023
    </p>
    <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
      Join for 20 USDT
    </button>
  </div>

  <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md">
    <div className="flex items-center ">
      <img src="./assets/perfilBen.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
      <div>
        <p className="font-semibold text-blue-800 font-poppins">Benjamin Gutierrez</p>
        <p className="text-sm text-blue-600 font-poppins">@gutybv.lens</p>
      </div>
    </div>
    <p className="my-2 text-gray-700 font-poppins">
      Challenge your team, defend it before it's too late!
    </p>
    <div className="flex justify-between items-center mx-4">
      <img src="./assets/city.png" alt="Team Logo" className="w-12 h-12" />
      <span className="text-lg text-gray-800 font-semibold">VS</span>
      <img src="./assets/inter.png" alt="Team Logo" className="w-12 h-12" />
    </div>
    <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
      Nov, 23th 2023
    </p>
    <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
      Join for 20 USDT
    </button>
  </div>

  <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md">
    <div className="flex items-center ">
      <img src="./assets/perfilBen.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
      <div>
        <p className="font-semibold text-blue-800 font-poppins">Benjamin Gutierrez</p>
        <p className="text-sm text-blue-600 font-poppins">@gutybv.lens</p>
      </div>
    </div>
    <p className="my-2 text-gray-700 font-poppins">
      Challenge your team, defend it before it's too late!
    </p>
    <div className="flex justify-between items-center mx-4">
      <img src="./assets/city.png" alt="Team Logo" className="w-12 h-12" />
      <span className="text-lg text-gray-800 font-semibold">VS</span>
      <img src="./assets/liverpool.png" alt="Team Logo" className="w-12 h-12" />
    </div>
    <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
      Nov, 23th 2023
    </p>
    <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
      Join for 20 USDT
    </button>
  </div>
  {/* Repeat the above div for each bet */}
</section>

        </main>
      </div>
    </>
  );
}
