import React from 'react'
import {useLocation} from 'react-router-dom';


const Detail = () => {

    const location = useLocation()


    console.log('in=======',location)

    
    return (
        <div>
            <h2>Details Page=======</h2>
            
        </div>
    )
}
export default Detail
