import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import React from "react";

function Category() {
  return (
    <div className="flex justify-center my-8">
      <NavLink
        to="/cuisine/italian"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-24 h-24 rounded-full transform scale-90 transition-all duration-300 hover:scale-100 mr-8
           ${isActive ? "bg-gradient-to-r from-[#f27121] to-[#e94057]" : "bg-gradient-to-br from-[#494949] to-[#313131]"}`
        }
      >
        <FaPizzaSlice className="text-white text-2xl" />
        <h4 className="text-white text-sm">Italian</h4>
      </NavLink>

      <NavLink
        to="/cuisine/american"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-24 h-24 rounded-full transform scale-90 transition-all duration-300 hover:scale-100 mr-8
           ${isActive ? "bg-gradient-to-r from-[#f27121] to-[#e94057]" : "bg-gradient-to-br from-[#494949] to-[#313131]"}`
        }
      >
        <FaHamburger className="text-white text-2xl" />
        <h4 className="text-white text-sm">American</h4>
      </NavLink>

      <NavLink
        to="/cuisine/thai"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-24 h-24 rounded-full transform scale-90 transition-all duration-300 hover:scale-100 mr-8
           ${isActive ? "bg-gradient-to-r from-[#f27121] to-[#e94057]" : "bg-gradient-to-br from-[#494949] to-[#313131]"}`
        }
      >
        <GiNoodles className="text-white text-2xl" />
        <h4 className="text-white text-sm">Thai</h4>
      </NavLink>

      <NavLink
        to="/cuisine/japanese"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-24 h-24 rounded-full transform scale-90 transition-all duration-300 hover:scale-100
           ${isActive ? "bg-gradient-to-r from-[#f27121] to-[#e94057]" : "bg-gradient-to-br from-[#494949] to-[#313131]"}`
        }
      >
        <GiChopsticks className="text-white text-2xl" />
        <h4 className="text-white text-sm">Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
