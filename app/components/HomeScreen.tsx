"use client";
import { useState } from "react";
import Image from "next/image";

const khodams = [
  "Pintu Terbang",
  "Ular Tidur",
  "Kucing Garong",
  "Gajah Mabuk",
  "Singa Gemuk",
  "Kuda Lumping",
  "Bebek Bodo",
  "Kambing Gila",
  "Anjing Gokil",
  "Sapi Galak",
  "Ayam Nyasar",
  "Tikus Liar",
  "Katak Beracun",
  "Cicak Nempel",
  "Belalang Tempur",
  "Ikan Asin",
  "Burung Gagap",
  "Kelinci Rewel",
  "Kepiting Sombong",
  "Kerbau Kesasar",
  "Capung Jail",
  "Kupu-kupu Gila",
  "Semut Serakah",
  "Kecoak Kepo",
  "Kelelawar Sinting",
  "Labalaba Miring",
  "Cendrawasih Kongkow",
  "Merpati Nangis",
  "Burung Hantu Galau",
];

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [khodam, setKhodam] = useState("");
  const [lastCheckedName, setLastCheckedName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckKhodam = () => {
    if (name.trim() === "") return; // Cek apakah input kosong
    if (name === lastCheckedName && khodam) return;

    setIsLoading(true);
    setTimeout(() => {
      const index =
        name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        khodams.length;
      const selectedKhodam = khodams[index];

      setKhodam(selectedKhodam);
      setLastCheckedName(name);
      setIsLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setName("");
    setKhodam("");
    setLastCheckedName("");
  };

  return (
    <main className="relative flex justify-center items-center w-full min-h-screen bg-primary">
      <div className="relative z-10 flex flex-col items-center p-6 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto bg-transparent shadow-lg rounded-2xl border border-gray-200 transition-transform transform duration-500 ease-in-out hover:scale-105">
        <h1 className="text-4xl text-black font-bold my-6 animate__animated animate__fadeInDown">
          Check Khodamu
        </h1>
        <p className="text-black text-lg mb-4 animate__animated animate__fadeInUp">
          Masukan Nama Kamu
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent placeholder:text-gray-600 mb-6 border border-primary-dark rounded-lg p-3 w-full shadow-md transition duration-300 ease-in-out focus:ring-2 focus:ring-accent focus:outline-none"
          placeholder="Masukan Nama"
        />
        <button
          onClick={handleCheckKhodam}
          className="bg-[#F25019] text-white rounded-lg py-2 px-6 w-full mb-4 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        >
          Check
        </button>
        {isLoading ? (
          <p className="text-black animate__animated animate__flash">
            Loading...
          </p>
        ) : (
          khodam && (
            <>
              <p className="text-black animate__animated animate__fadeIn">
                Khodam kamu adalah: <strong>{khodam}</strong>
              </p>
              <button
                onClick={handleReset}
                className="bg-red-500 text-white rounded-lg py-2 px-6 w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                Reset
              </button>
            </>
          )
        )}
        <p className="text-black mt-4">Developed by Angga Diki Saputra</p>
      </div>
      <div className="absolute inset-0">
        <Image
          src="/bg-1.png"
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </main>
  );
};

export default HomeScreen;
