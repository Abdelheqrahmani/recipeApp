import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Search from "./Search";
import Searched from "../pages/Searched";

function Main() {
  const searchedRef = useRef(null);
  const [searched, setSearched] = useState(false);



  const handleSearch = () => {
    setSearched(true);
    searchedRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen">
  
        <div className="flex flex-col items-center justify-start w-full h-screen gap-1 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/photos-gratuite/repas-thanksgiving-espace-copie_23-2149100112.jpg?t=st=1740599647~exp=1740603247~hmac=93a716c0b669485c9c233cb3d1fc2717756c714de800fff50269b6cd059ab35c&w=1800')",
          }}
        >
          <Link
            className="flex flex-row items-center justify-center gap-1 w-full h-auto bg-amber-50 text-white"
            to="/"
          >
            <div className="text-4xl flex flex-row mt-3">
              Recipe<p className="animate-bounce mt-1 text-orange-400">Z</p>
            </div>
            <GiKnifeFork className="text-orange-400 animate-bounce text-3xl mt-3" />
          </Link>

          <div className="container flex flex-row items-center justify-center gap-1 text-center">
            <div className="left w-[80%] h-screen flex flex-col items-center justify-center">
              <h1 className="text-6xl text-black flex items-center justify-center flex-wrap">
                Find Your Perfect <p className="text-orange-400">Recipe!</p>{" "}
              </h1>
              <h2 className="text-2xl">
                Search for delicious Recipe<p className="text-orange-400 inline">Z</p> and start cooking today!
              </h2>
              <Search onSearch={handleSearch} />
            </div>
          </div>

          {searched && (
            <div ref={searchedRef}>
              <Searched />
            </div>
          )}
        </div>
      </div>
   
  );
}

export default Main;
