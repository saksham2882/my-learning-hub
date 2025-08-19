/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RecipesDetails = ({ recipes }) => {

    const { id } = useParams();
    // The above line means: id is the return value of useParams(), which contains the id.
    // Here, we are using the parameter ("id") that is defined in the "path" of "Routes" inside "App.jsx".

    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        const filteredRecipe = recipes.find((recipe) => recipe.id === id);
        setRecipeDetails(filteredRecipe);
    }, [id, recipes])

    return (
        recipeDetails && (
            <div className="recipeDetails">
                <img src={recipeDetails.image} alt={recipeDetails.title} />
                <h1>{recipeDetails.title}</h1>
                <p>{recipeDetails.description}</p>
                <div>
                    <h3>Steps:</h3>
                    <ul>
                        {
                            recipeDetails.steps && recipeDetails.steps.map(element => {
                                return (
                                    <li key={element}>{element}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h3>Ingredients:</h3>
                    <ul>
                        {
                            recipeDetails.ingredients && recipeDetails.ingredients.map(element => {
                                return (
                                    <li key={element}>{element}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <span>Tags:</span>
                    <span>
                        {
                            recipeDetails.tags && recipeDetails.tags.map(element => {
                                return (
                                    <span key={element}> {element} | </span>
                                )
                            })
                        }
                    </span>
                </div>

                <h4>Other Information: </h4>
                <ol className='info'>
                    <li> 
                        Category: { recipeDetails.category }
                    </li>
                    <li>
                        Servings: {recipeDetails.servings}
                    </li>
                    <li>
                        Cooking Time: {recipeDetails.cooking_time}
                    </li>
                    <li>
                        Difficulty level: {recipeDetails.difficulty}
                    </li>
                    <li>
                        Rating: {recipeDetails.rating}⭐
                    </li>
                    <li>
                        Reviews: {recipeDetails.reviews}
                    </li>
                    <li>
                        Price: { recipeDetails.price }
                    </li>
                </ol>
            </div>
        )
    )
}

export default RecipesDetails