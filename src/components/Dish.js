import React from 'react'

const Dish = (props) => {
    const {dish} = props

    return (
        
            <div className="card">
                <img src={dish.strMealThumb} 
                     className="card-img-top" 
                     alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
                        {dish.strMeal}
                    </h5>
                    <button type="button"
                            onClick={() => props.handleAddDish(dish.strMeal)}
                    >ADD</button>
                </div>
            </div>
        
    )
}
export default Dish
