import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Search from "./Search";
function Main() {
  return (
    <div className="Link flex flex-col items-center justify-start   w-[100%] h-lvh  gap-1 size-max">
      <Link
        className="flex flex-row items-center justify-center gap-1 w-full h-auto text-white"
        to="/"
      >
        <div className=" text-4xl flex flex-row mr-3">
          Recipe<p>Z</p>
        </div>
        <GiKnifeFork className="text-orange-400" />
      </Link>

      <div className="container flex flex-row items-center justify-between gap-1">
        <div className="left w-full h-lvh mt-2xl flex flex-col  items-start justify-center">
          <h1 className="text-5xl text-black">Find Your Perfect Recipe!</h1>
          <h2 className="text-1xl">
            Search for delicious recipes and start cooking today!
          </h2>
          <Search />
        </div>
        <div className="right bg-amber-950  w-full h- ">hello</div>
      </div>
    </div>
  );
}

export default Main;
