'use client'
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ConnectButton from '../components/connectButton';
import { useAccount } from 'wagmi';
import { useLogin, useFollow, useProfiles,useLogout, useSession } from '@lens-protocol/react-web';

export default function Login() {
  const [isMounted, setIsMounted] = useState(false);
  const { isConnected, address } = useAccount();
  const { execute: login } = useLogin();
  const { execute: follow } = useFollow();
  const { data: ownedProfiles } = useProfiles({
    where: {
      ownedBy: [address || ''],
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  useEffect(() => {

  }, [isConnected])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <img src="./assets/logo.png" alt="Logo" className="w-40 mb-4" /> {/* Asegúrate de poner la ruta correcta de tu logo */}
      <h1 className="text-2xl font-bold text-center mb-4">Welcome to the betting revolution</h1>
      {isMounted && (
  isConnected ? (
    <button
      className="rounded-full px-4 py-2 mt-4 mb-6 bg-green-500 hover:bg-zinc-700 transition-all duration-300 ease-in-out"
      onClick={() => {
        if (!useSession) {
          login({ address: address || '' });
        } else {
          
          router.push('/feed'); // Redirecciona a '/feed' si useSession es true
        }
      }}>
      {!useSession ? 'Connect' : 'Continue'}
    </button>
  ) : (
    <ConnectButton />
  )
)}
    </div>
  );
}
