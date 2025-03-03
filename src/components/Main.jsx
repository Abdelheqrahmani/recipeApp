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
    setTimeout(() =>
      searchedRef.current.scrollIntoView({ behavior: "smooth" })
    );
  };

  return (
    <div  style={{
      backgroundImage:
        "url('https://img.freepik.com/photos-gratuite/repas-thanksgiving-espace-copie_23-2149100112.jpg?t=st=1740599647~exp=1740603247~hmac=93a716c0b669485c9c233cb3d1fc2717756c714de800fff50269b6cd059ab35c&w=1800')",
    }} className=" w-full ">
      <div
        className="flex flex-col items-center justify-start w-full bg-cover bg-center"
       
      >
        <div className=" w-full flex justify-around h-10 bg-amber-50">
        <Link
          className="  items-center flex flex-row justify-center h-auto text-white"
          to="/"
        >
          <div className="text-4xl flex ">
          <p className="animate-bounce mt-1 text-orange-400">Z</p>
          </div>
          <GiKnifeFork className="  text-orange-400 animate-bounce text-3xl mt-3" />
        </Link>
       <div className=" flex flex-row gap-1 justify-center items-center list-none"> 
        <li>Home</li>
        <li>Category </li>
        <li>Popular</li>
        <li>Veggies </li>
        
       </div>
        
        
        </div>
<div className="bg-amber-50/80 w-[80%]">
        <div className=" container flex  flex-row items-center justify-center gap-1 text-center">
          <div className="left  container w-[80%] h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl text-black flex items-center justify-center flex-wrap gap-1">
              Find Your Perfect{" "}
              <p className="text-orange-400 outlined-text ">Recipe!</p>{" "}
            </h1>
            <h2 className="text-2xl my-5">
              Search for delicious Recipe
              <p
                className="text-orange-400 inline text-outline 
 "
              >
                Z
              </p>{" "}
              and start cooking today!
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
    </div>
  );
}

export default Main;
