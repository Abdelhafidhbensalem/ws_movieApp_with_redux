import './App.css';
import React from "react"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';


function App() {
  

  return (
  <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/addMovie' element={<Add/>}/>
    <Route path='/editMovie/:idEdit' element={<Edit/>}/>
   </Routes>
   
  </>
  );
}

export default App;



