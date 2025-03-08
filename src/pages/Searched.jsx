import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Main from "../components/Main";

function Searched() {
  let params = useParams();
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const resultsRef = useRef(null);

  const getSearched = async (name) => {
    const check = localStorage.getItem(name);

    if (check) {
      setSearchedRecipes(JSON.parse(check));
      setLoading(false);
    } else {
      try {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=d051999aa4f04cbf8bda18878c42746f&query=${name}`
        );
        const recipes = await data.json();
        localStorage.setItem(name, JSON.stringify(recipes.results));
        setSearchedRecipes(recipes.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    getSearched(params.search);
    // Scroll to results after data is loaded
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 500);
  }, [params.search]);

  return (
    <div>
      <Main />
      <div ref={resultsRef} className="container mx-auto px-4 scroll-mt-16">
        <h2 className="text-2xl font-bold my-6">
          Search Results for "{params.search}"
        </h2>
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : searchedRecipes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600">
              No recipes found for "{params.search}"
            </p>
            <p className="mt-2 text-gray-500">
              Try searching with different keywords
            </p>
          </div>
        ) : (
          <Grid>
            {searchedRecipes.map((item) => (
              <Link to={"/recipe/" + item.id} key={item.id}>
                <Card>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                </Card>
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 2rem 0rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
