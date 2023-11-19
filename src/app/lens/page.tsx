'use client'
import { useEffect } from 'react';

import ConnectButton from '../components/connectButton';
import { useAccount } from 'wagmi';

export default function Login() {
  const { isConnected } = useAccount();
  

//   useEffect(() => {
//     if (isConnected) {
//       router.push('/feed'); // Cambia '/lens' por la ruta de tu otra página
//     }
//   }, [isConnected, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="./assets/public/logo.png" alt="Logo" className="w-40 mb-4" /> {/* Asegúrate de poner la ruta correcta de tu logo */}
      <h1 className="text-2xl font-bold text-center mb-4">Welcome to the betting revolution</h1>
      <ConnectButton />
    </div>
  );
}
