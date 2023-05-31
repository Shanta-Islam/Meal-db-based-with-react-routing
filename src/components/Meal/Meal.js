import React from 'react';
import './Meal.css';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {
    const {idMeal,strMeal,strMealThumb} = meal;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/meal/${idMeal}`);
    }
    return (
        <div>
            <div className='meal'>
                <h4>Meal Name: {strMeal}</h4>
                <img src={strMealThumb} alt="" />
                {/* option 1 */}
                <Link to={`/meal/${idMeal}`}>
                    <button className='details-btn'>Details</button>
                </Link>
                {/* option 2 */}
                <button className='details-btn' onClick={handleNavigate}>Details</button>
                {/* option 3 */}
                <Link to={`/meal/${idMeal}`}>Details</Link>

            </div>
        </div>
    );
};

export default Meal;