import React from 'react';
import './App.css';
import MovieList from './MovieList.jsx';
import LoginSignup from './LoginSignup';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;