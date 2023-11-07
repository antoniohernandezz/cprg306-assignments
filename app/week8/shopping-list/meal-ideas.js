"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredients }) {

  const [meals , setMeals] = useState([]);
  
    useEffect(() => {
        async function fetchMealIdeas(){
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
            const data = await response.json();
            console.log(data);
            setMeals(data.meals);}
            fetchMealIdeas();

        }, [ingredients]);

    return (
        <div className="absolute top-10 right-0 w-1/4 ml-auto">
            <h1 className="flex text-white items-center justify-center font-bold text-xl ">Meal Ideas</h1>
            {meals && meals.length > 0 ? (
            <div className="flex bg-white items-center justify-center">
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <p>{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
            </div>
            ) : (
                <p>No meal ideas found.</p>
            )}
        </div>
    );
}