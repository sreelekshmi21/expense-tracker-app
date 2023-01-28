
import React, {Component} from 'react';
import './components/css/transaction.css';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import TransactionsList from './components/TransactionsList'
import { GlobalProvider } from './components/context/GlobalState';


const App = () =>{
  
  
  return (
    <>
      <GlobalProvider>
      <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/transactionslist' element={<TransactionsList />} />

        </Routes> 
        

      </GlobalProvider>
      
    </>  
    ); 
      
  
  
  
}
export default App;
