import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const DatesList = (props) => {

    const [selected,setSelected] = useState(false)
    const [dates, setDates] = useState([])

    useEffect(() =>{
        getDishDates()
    },[])
  
    const getDishDates = () =>{

        let start = moment().format("DD/MM/YYYY");

        let end = moment().add(5, 'days').format("DD/MM/YYYY");

        setDates([...dates,start,end])
    } 
    
    const handleCheckBoxChange = (date) =>{

       setSelected(!selected)

       props.addSelectedDate(date)
    }

    return (
    <>
        <h4>{dates.map((date,index) => (
            <div key={index}>
                <input type="checkbox"
                       name="selected" 
                       onChange={() => handleCheckBoxChange(date)} 
                       checked={selected ? true : false}
                />   
                <p>{date}</p>
            </div>
        ))}</h4>
           
        </>
    )
}
