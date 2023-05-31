import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const meals = useLoaderData();
    // console.log(meals);
    return (
        <div>
            <h2>All Meals</h2>
            <div className='meals-container'>
                {
                    meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>

        </div>
    );
};

export default Meals;