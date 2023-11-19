"use client";
import Head from "next/head";
import { useState } from "react";

// Add additional imports as needed

export default function DefendYourTeam() {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Head>
        <title className="font-poppins">Defend Your Team</title>
      </Head>

      <div className="text-white">
        <header className="text-center p-4">
          <h1 className="text-2xl font-bold font-poppins">Defend your team</h1>
        </header>

        <main className="p-4">
          <img
            src="./assets/city.png"
            alt="Team"
            className=" mx-auto w-40 p-0"
          />

          <section className="mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-white font-poppins">
              Coming bets
            </h2>
            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md ">
              <div
                onClick={() => setExpanded(!expanded)}
                className=" ${expanded ? 'scale-110' : 'scale-100'}"
              >
                <div className="flex items-center ">
                  <img
                    src="./assets/perfilBen.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-semibold text-blue-800 font-poppins">
                      Benjamin Gutierrez
                    </p>
                    <p className="text-sm text-blue-600 font-poppins">
                      @gutybv.lens
                    </p>
                  </div>
                </div>
                <p className="my-2 text-gray-700 font-poppins">
                  Challenge your team, defend it before it's too late!
                </p>
                <div className="flex justify-between items-center mx-4">
                  <img
                    src="./assets/city.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                  <span className="text-lg text-gray-800 font-semibold">
                    VS
                  </span>
                  <img
                    src="./assets/liverpool.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                </div>
                <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
                  Nov, 23th 2023
                </p>
                {expanded && (
                  // Aquí va el contenido adicional que quieres mostrar cuando se hace clic
                  <div>
                    <div className="flex justify-between items-center mx 4">
                      <div className="text-black  ">
                        <ul className="flex flex-col">
                          <li className="p-2 font-poppins  pt-3 cursor-pointer transition-all duration-300 hover:scale-110">
                            @shafu
                          </li>
                          <li className="text-red-400 font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                          <li className="p-2 pt-3 font-poppins  cursor-pointer transition-all duration-300 hover:scale-110">
                            @daniel
                          </li>
                          <li className="text-red-400  font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                        </ul>
                      </div>
                      <div className="text-black  ">
                        <ul className="flex flex-col">
                          <li className="p-2 font-poppins  pt-3 cursor-pointer transition-all duration-300 hover:scale-110">
                            @shafu
                          </li>
                          <li className="text-red-400 font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                          <li className="p-2 pt-3 font-poppins  cursor-pointer transition-all duration-300 hover:scale-110">
                            @daniel
                          </li>
                          <li className="text-red-400  font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                          <li className="p-2 pt-3 font-poppins cursor-pointer transition-all duration-300 hover:scale-110">
                            @stani
                          </li>
                          <li className="text-red-400 font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p className="my-4 text-gray-700 font-poppins text-center font-light italic">
                        We have an spot waiting for you!
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                Join for 2 matic
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md ">
              <div
                onClick={() => setExpanded(!expanded)}
                className=" ${expanded ? 'scale-110' : 'scale-100'}"
              >
                <div className="flex items-center ">
                  <img
                    src="./assets/perfilDani.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-semibold text-blue-800 font-poppins">
                      Daniel Beltran
                    </p>
                    <p className="text-sm text-blue-600 font-poppins">
                      @daniels.lens
                    </p>
                  </div>
                </div>
                <p className="my-2 text-gray-700 font-poppins">
                  Challenge your team, defend it before it's too late!
                </p>
                <div className="flex justify-between items-center mx-4">
                  <img
                    src="./assets/city.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                  <span className="text-lg text-gray-800 font-semibold">
                    VS
                  </span>
                  <img
                    src="./assets/liverpool.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                </div>
                <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
                  Nov, 23th 2023
                </p>
                {expanded && (
                  // Aquí va el contenido adicional que quieres mostrar cuando se hace clic
                  <div>
                    <div className="flex justify-between items-center mx 4">
                      <div className="text-black  ">
                        <ul className="flex flex-col">
                          <li className="p-2 font-poppins  pt-3 cursor-pointer transition-all duration-300 hover:scale-110">
                            @shafu
                          </li>
                          <li className="text-red-400 font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                          <li className="p-2 pt-3 font-poppins  cursor-pointer transition-all duration-300 hover:scale-110">
                            @daniel
                          </li>
                          <li className="text-red-400  font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                          <li className="p-2 pt-3 font-poppins  cursor-pointer transition-all duration-300 hover:scale-110">
                            @stani
                          </li>
                          <li className="text-red-400  font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                        </ul>
                      </div>
                      <div className="text-black  ">
                        <ul className="flex flex-col">
                          <li className="p-2 font-poppins  pt-3 cursor-pointer transition-all duration-300 hover:scale-110">
                            @shafu
                          </li>
                          <li className="text-red-400 font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                          <li className="p-2 pt-3 font-poppins  cursor-pointer transition-all duration-300 hover:scale-110">
                            @daniel
                          </li>
                          <li className="text-red-400  font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                          <li className="p-2 pt-3 font-poppins cursor-pointer transition-all duration-300 hover:scale-110">
                            @stani
                          </li>
                          <li className="text-red-400 font-poppins  pl-2">
                            {" "}
                            2 matic
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p className="my-4 text-gray-700 font-poppins text-center font-light italic">
                        Joint the waiting list
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={toggleModal}
                className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins"
              >
                Join for 2 matic
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
                  <div className="relative bg-white rounded-lg shadow-xl">
                    <div className="flex justify-end p-2">
                      <button
                        onClick={toggleModal}
                        className="text-gray-400 hover:text-gray-900"
                      >
                        <span className="text-2xl">&times;</span>
                      </button>
                    </div>
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-medium text-center text-gray-900 mb-4">
                        Join the waiting list
                      </h3>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500 text-center">
                          In Bet Markets, we promote fair play. You'll be on
                          standby until a player from the opposing team joins.
                          Your stake is secure, and you'll keep earning money
                          and points. Want to speed things up? Invite a friend
                          from the rival team to follow each other.
                        </p>
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center">
                          <img
                            src="./assets/push.png"
                            alt="Icono"
                            className="mr-2 w-6 h-6"
                          />{" "}
                          {/* Asegúrate de ajustar la ruta de la imagen */}
                          Invite Friends
                        </button>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out">
                          Join for 2 matic
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md">
              <div className="flex items-center ">
                <img
                  src="./assets/perfilBen.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold text-blue-800 font-poppins">
                    Benjamin Gutierrez
                  </p>
                  <p className="text-sm text-blue-600 font-poppins">
                    @gutybv.lens
                  </p>
                </div>
              </div>
              <p className="my-2 text-gray-700 font-poppins">
                Challenge your team, defend it before it's too late!
              </p>
              <div className="flex justify-between items-center mx-4">
                <img
                  src="./assets/city.png"
                  alt="Team Logo"
                  className="w-12 h-12"
                />
                <span className="text-lg text-gray-800 font-semibold">VS</span>
                <img
                  src="./assets/inter.png"
                  alt="Team Logo"
                  className="w-12 h-12"
                />
              </div>
              <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
                Nov, 23th 2023
              </p>
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                Join for 2 matic
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md">
              <div className="flex items-center ">
                <img
                  src="./assets/perfilBen.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold text-blue-800 font-poppins">
                    Benjamin Gutierrez
                  </p>
                  <p className="text-sm text-blue-600 font-poppins">
                    @gutybv.lens
                  </p>
                </div>
              </div>
              <p className="my-2 text-gray-700 font-poppins">
                Challenge your team, defend it before it's too late!
              </p>
              <div className="flex justify-between items-center mx-4">
                <img
                  src="./assets/city.png"
                  alt="Team Logo"
                  className="w-12 h-12"
                />
                <span className="text-lg text-gray-800 font-semibold">VS</span>
                <img
                  src="./assets/liverpool.png"
                  alt="Team Logo"
                  className="w-12 h-12"
                />
              </div>
              <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
                Nov, 23th 2023
              </p>
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                Join for 2 matic
              </button>
            </div>
            {/* Repeat the above div for each bet */}
          </section>
        </main>
      </div>
    </>
  );
}
