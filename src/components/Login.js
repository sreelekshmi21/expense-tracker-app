import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'


const Login = () =>{

    const navigate = useNavigate();

    const [username,setUsername] = useState('')

    const [password,setPassword] = useState('')
      
    const handleSubmit = (e) =>{
        
      e.preventDefault()
      navigate('/dishesList')
    }


  return(
    <div className="container">     
      <h3 className="text-center">LOGIN FORM</h3>             
      <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text"
                     name="username" 
                     value={username === '' ? '' : username}
                     className="form-control" 
                     required
                     onChange={(e) => setUsername(e.target.value)}
                     placeholder="Username"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" 
                       name="password"
                       required
                       value={password === '' ? '' : password}
                       className="form-control"
                       onChange={(e) => setPassword(e.target.value)} 
                       placeholder="Password"/>
            </div>
          </div>
          <div className="text-center form-btn">
            <button type="submit" className="btn btn-primary">LogIn</button>
          </div>
      </form>
    </div>
    );
}
export default Login