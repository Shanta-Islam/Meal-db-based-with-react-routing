import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealDetailsShow from '../MealDetailsShow/MealDetailsShow';

const MealDetails = () => {
    const meal = useLoaderData();
    return (
        <div>
            {
                meal.meals.map(m=><MealDetailsShow key={m.idMeal} m={m}></MealDetailsShow> )
            }
        </div>
    );
};

export default MealDetails;