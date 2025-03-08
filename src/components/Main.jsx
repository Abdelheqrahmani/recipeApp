import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Search from "./Search";

function Main({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/photos-gratuite/repas-thanksgiving-espace-copie_23-2149100112.jpg?t=st=1740599647~exp=1740603247~hmac=93a716c0b669485c9c233cb3d1fc2717756c714de800fff50269b6cd059ab35c&w=1800')",
      }}
      className="w-full min-h-screen bg-cover bg-center relative"
    >
      {/* Navbar */}
      <div className="w-full flex justify-between items-center h-16 px-6 bg-amber-50 shadow-xl relative z-20">
        {/* Logo */}
        <Link className="flex items-center text-white" to="/">
          <p className="text-4xl text-orange-400 animate-bounce mt-1">Z</p>
          <GiKnifeFork className="text-orange-400 animate-bounce text-3xl mt-3" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6">
          <li className="hover:text-orange-400 cursor-pointer p-4">Home</li>
          <li className="hover:text-orange-400 cursor-pointer p-4">Category</li>
          <li className="hover:text-orange-400 cursor-pointer p-4">Popular</li>
          <li className="hover:text-orange-400 cursor-pointer p-4">Veggies</li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden flex flex-col justify-between h-6 w-6 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <span className="block w-full h-0.5 bg-black"></span>
          <span className="block w-full h-0.5 bg-black"></span>
          <span className="block w-full h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-amber-50/99 flex flex-col items-center justify-center z-30 text-white text-3xl space-y-8"
          onClick={() => setIsOpen(false)} // Close menu when clicking outside
        >
          <button
            className="absolute top-6 right-6 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <a
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Category
          </a>
          <a
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Popular
          </a>
          <a
            className="hover:text-orange-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Veggies
          </a>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-amber-50/80 w-[80%] mx-auto my-0">
        <div className="container flex flex-row items-center justify-center gap-1 text-center">
          <div className="left container w-[80%] h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl text-black flex items-center justify-center flex-wrap gap-1">
              Find Your Perfect{" "}
              <p className="text-orange-400 outlined-text">Recipe!</p>{" "}
            </h1>
            <h2 className="text-2xl my-5">
              Search for delicious Recipe
              <p className="text-orange-400 inline text-outline">Z</p> and start
              cooking today!
            </h2>
            <Search onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
