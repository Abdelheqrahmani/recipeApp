import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=d051999aa4f04cbf8bda18878c42746f&number=9`
        );
        const data = await api.json();

        if (data.recipes) {
          localStorage.setItem("popular", JSON.stringify(data.recipes)); // popular key
          setPopular(data.recipes);
          console.log(data.recipes);
        } else {
          console.error("No recipes found in the response:", data);
        }
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
      }
    }
  };

  return (
    <div>
      <h1>Popular</h1>
      <Splide 
        options={{
          perPage: 4,
          gap: "1.5rem",
          pagination: false,
          arrows: false,
          autoplay: true,
          type: "loop",
          interval: 3000,
          speed: 1500,
          breakpoints: {
            1200: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1, interval: 2000, speed: 1000 },
          },
        }}
      >
     
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link   to={"/recipe/" + recipe.id}>
              <div className="container w-full  flex flex-col gap-0.5  justify-center 
               items-start rounded-xl shadow-lg h-full ">
                <img src={recipe.image} alt={recipe.title} />
                <p className="w-full 
                h-10 text-center"> {recipe.title}</p>
                <p
             className="text-gray-700 w-full h-20 overflow-hidden "
                 dangerouslySetInnerHTML={{
                __html: recipe.summary.length < 100
                  ? recipe.summary
                  : recipe.summary.substring(0, 100) + "..."
            }}></p>
            <div className="  w-full flex justify-start h-10 items-center gap-2">
         <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-300 cursor-pointer "> Read More</button>
             </div> </div>
            </Link>
          
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
