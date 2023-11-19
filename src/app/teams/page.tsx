'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ethers } from 'ethers';

export default function Team() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const router = useRouter();

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleContinue = () => {
    if (selectedTeam) {
      router.push('/feed');
    }
  };

  const manchesterCityToken = '0x0E54336875cf6DdBD851A1E585245983BedA348c'
  const barcaToken = '0x24A7614dE5ad4b9De1029208BCa1c4ba9094222D'
    const liverpoolToken = '0x63667746A7A005E45B1fffb13a78d0331065Ff7f'
    const chiliz = '80002'

    const abiContract = [{"inputs":[{"internalType":"address","name":"implementationContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]


    

    const getTeam = async (token: any) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum as any);
        const contract = new ethers.Contract(token, abiContract, provider);
        const team = await contract.team();
        return team;
    };
    

    const getTeamName = async (token: any) => {
        const team = await getTeam(token);
        if (team === 0) {
            return 'city';
        } else if (team === 1) {
            return 'barca';
        } else if (team === 2) {
            return 'liverpool';
        }
    }



  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-lg font-semibold text-center mb-4">
          We detect these team tokens in your wallet
        </p>
        <p className="mb-8">
          Choose one to continue
        </p>

        <div className="flex space-x-4">
          <button 
            onClick={() => handleTeamSelect('city')}
            className={`flex flex-col items-center justify-center ${selectedTeam === 'city' ? 'bg-black' : ''}`}>
            <img src="./assets/city.png" alt="Team Logo" className="w-24 h-24 mb-2" />
            <span>Manchester City</span>
          </button>

          <button 
            onClick={() => handleTeamSelect('barca')}
            className={`flex flex-col items-center justify-center ${selectedTeam === 'barca' ? 'bg-black' : ''}`}>
            <img src="./assets/barca.png" alt="Team Logo" className="w-24 h-24 mb-2" />
            <span>Barcelona</span>
          </button>

          <button 
            onClick={() => handleTeamSelect('barca')}
            className={`flex flex-col items-center justify-center ${selectedTeam === 'liv' ? 'bg-black' : ''}`}>
            <img src="./assets/liverpool.png" alt="Team Logo" className="w-24 h-24 mb-2" />
            <span>Liverpool</span>
          </button>
        </div>

        {selectedTeam && (
          <button 
            onClick={handleContinue}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Continue
          </button>
        )}
      </div>
    </>
  );
}
