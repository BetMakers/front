import { useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted && isConnected ? (
        <p className="text-white">Connected</p>
      ) : (
        <button 
          onClick={() => open()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Connect
        </button>
      )}
    </div>
  );
}
