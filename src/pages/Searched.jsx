import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Main from '../components/Main';

function Searched() {
    let params = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getSearched = async (name) => {
        const check = localStorage.getItem(name);

        if (check) {
            setSearchedRecipes(JSON.parse(check));
            setLoading(false);
        } else {
            try {
                const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d051999aa4f04cbf8bda18878c42746f&query=${name}`);
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
    }, [params.search]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container mx-auto'>
            <Main/>
            {searchedRecipes.length === 0 && params.search ? (
      <div style={{ textAlign: "center", fontSize: "1.5rem", color: "red", marginTop: "20px" }}>
        No recipes found.
      </div>
    ) : searchedRecipes.map((recipe) => (
               <Link to={'/recipe/' + recipe.id } key={recipe.id} >
                <Card  className=''>
                    <img src={recipe.image} alt="" />
                    <h4>{recipe.title}</h4>
                </Card>
                </Link>
            ))}
        </div>
    );
}


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