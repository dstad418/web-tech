// App.js

import React from 'react';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Houses from './components/Houses';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/" element={<Navigate to="/home" />} /> 
      </Routes>
  </Router>
  );
}

export default App;
