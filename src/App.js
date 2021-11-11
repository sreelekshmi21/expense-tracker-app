import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login'
import DishesList from './components/DishesList'
import Detail from './components/Detail'


class App extends Component{
  
  render(){
  return (
    <div className="app">
      <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/dishesList' element={<DishesList />} />
          <Route path='/details' element={<Detail />} />
      </Routes>
    </div>
  );
  }
}
export default App;
