import React,{useEffect,useState} from "react";
import Data from "./fdata";
import "./recipe.css"
import { Button,TextField } from "@mui/material";
const Recipe = () => {
    const APP_ID = '3c9f0985';
    const APP_KEY = 'b2f4f7856dfc35e9de885c966e3f7608';
           
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('souce');
    
    useEffect(() =>{
        getRecipes();
    }, [query]); 
//query
    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        // console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <div className="Application">
            <form onSubmit={getSearch} className="search-form">
                <TextField id="standard-basic" label="Search" variant="standard"  value={search} onChange={updateSearch}/>
                <Button variant="outlined" id="btn-src" type='submit'>Search</Button>
            </form><hr/>
            <h2 className="text-center mb-5 text-white">Results</h2>
            <div className="content">
                {recipes.map(recipe => (
                    <Data
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    imagee={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    key={recipe.recipe.label}
                    />
                ))}
            </div>
        </div>
    )
}

export default Recipe;