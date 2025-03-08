import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=d051999aa4f04cbf8bda18878c42746f&number=9&vegetarian=true`
        );
        const data = await api.json();

        if (data.recipes) {
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setVeggie(data.recipes);
        } else {
          console.error("No recipes found in the response:", data);
        }
      } catch (error) {
        console.error("Error fetching vegetarian recipes:", error);
      }
    }
  };

  return (
    <div className="w-full container mt-3">      <div className="w-full text-center py-2 bg-gradient-to-r from-green-400/30 rounded-t-xl to-emerald-600 text-white font-bold text-lg shadow-lg">
        Our Vegetarian Picks
      </div>
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
          accessibility: false,
        }}
        className="bg-gradient-to-r from-green-400/30 to-emerald-600 rounded-b-lg w-full h-[400px] items-center"
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <div className="w-full h-[400px] flex flex-col bg-white/70 shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
                <img
                  className="w-full h-[180px] object-cover"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className="p-4 flex flex-col gap-3 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {recipe.title}
                  </h3>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Veggie;
