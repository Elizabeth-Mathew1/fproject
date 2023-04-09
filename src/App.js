import './App.scss';
import {FaBehance, FaDribbble} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle, IoStar} from 'react-icons/io5';
import {IconContext} from "react-icons";
import { useState } from 'react';
import Testme from './testme';
import Home from './home';
import {motion} from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';




function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/testme" element = {<Testme/>} />
      </Routes>
    </Router>
  );
}

export default App;