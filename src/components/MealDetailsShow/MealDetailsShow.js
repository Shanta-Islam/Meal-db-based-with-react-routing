import React from 'react';
import './MealDetailsShow.css';

const MealDetailsShow = ({m}) => {
    return (
        <div className='singleMeal'>
            <h3>Meal Name: {m.strMeal} </h3>
            <img src={m.strMealThumb} alt="" />
            <p>{m.strInstructions}</p>
        </div>
    );
};

export default MealDetailsShow;