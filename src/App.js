import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Vheicles from './Components/Vheicles/Vheicles';
import SearchDestination from './Components/SearchDestination/SearchDestination';
import NothingFound from './Components/NothingFound/NothingFound';
import { createContext } from 'react';
import { useState } from 'react';
import Singup from './Components/Login/Signup';
import Login from './Components/Login/Login';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Vheicles />} /> 
            <Route path="home" element={<Vheicles />} /> 
            <Route path="destination" element={<SearchDestination />} /> 
            <Route path="signup" element={<Singup />} /> 
            <Route path="login" element={<Login />} /> 
            <Route path="*" element={<NothingFound />} /> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
