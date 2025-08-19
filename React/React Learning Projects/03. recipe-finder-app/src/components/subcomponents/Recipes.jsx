/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

const Recipes = ({recipes}) => {

    const options = [
        "Recipes & Menus",
        "share Your Recipe",
        "Cooking Tips & Tricks",
        "Recipe Search",
        "Recipe of the Day",
        "Food for the Good Health"
    ]

    return (
        <article className='recipes'>
            <section>
                {
                    options.map((element, index) => {
                        return (
                            <button key={index}>{ element }</button>
                        )
                    })
                }
            </section>

            <section className='container'>
                {
                    recipes.slice(0, 10).map((element, index)=> {
                        return (
                            <Card key={index} element={element} />
                        )
                    })
                }
            </section>

            <h3>Recommended Recipes</h3>

            <section className='container'>
                {
                    recipes.slice(10).map((element, index) => {
                        return (
                            <Card key={index} element={element} />
                        )
                    })
                }
            </section>
       </article>    
    )
}


const Card = ({ element }) => { 
    return (
        <Link to={`/recipe/${element.id}`} className='card'>
            <img src={element.image} alt={element.title} />
            <h3>{element.title}</h3>
            <h4>{ element.cooking_time}</h4>
        </Link>
    )
}

export default Recipes
