import './App.css';
import React from "react"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './components/Add/Add';

function App() {
  

  return (
  <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/addMovie' element={<Add/>}/>
   </Routes>
      
  </>
  );
}

export default App;



