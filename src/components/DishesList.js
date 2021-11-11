import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Dish from './Dish'
import { DatesList } from './DatesList'
import {useNavigate} from 'react-router-dom'


const DishesList = () => {

    const navigate = useNavigate();

    const [dishes,setDishes] = useState([])

   const [selectedDate, setSelectedDate] = useState('')

   const [selectedDish, setSelectedDish] = useState('')

   const [selectedMeals,setSelectedMeals] = useState([
       {id:1,dish:'tes',date:'11/11/2021'}
    ])

   useEffect(() =>{

          getData()
    },[])

    const getData = async () =>{
      const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
      setDishes(resp.data.meals)
    }

    const handleAddDish = (dish) =>{
        setSelectedDish(dish)
    }

    const addSelectedDate = (date) =>{
        setSelectedDate(date)
    }

    const handleProceed = () =>{

        

        const newDish = {
            id: selectedMeals.length + 1,
            dish: selectedDish,
            date: selectedDate
        }

        console.log('new dish=========',newDish)
        setSelectedMeals([...selectedMeals, newDish])

        navigate('/details',{state: selectedMeals});
    }
    
    return (

        <>
            
           <div className="container">
           <h2>Dishes</h2>
              <div className="row">
                   <div className="col-md-7">
                       <DatesList 
                           addSelectedDate={addSelectedDate}
                       />
                       
                   </div>
                 <div className="col-md-5">
                    
                {
                  dishes.map((dish) => (
                      <Dish key={dish.idMeal}
                            dish={dish}
                            handleAddDish={handleAddDish}
                    />
                  ))
                }
                </div>
               </div>
               <div className="row">
               <button type="button"
                          onClick={handleProceed}
                          className="btn btn-primary">
                        Proceed
                 </button>
               </div>
               
         </div>
         
        
    </>
   )
}
export default DishesList
