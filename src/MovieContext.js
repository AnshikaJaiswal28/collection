import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(['Godfather', 'Shawshank Redemption', 'LadyBird']);
  const [newMovie, setNewMovie] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      setMovies([...movies, newMovie.trim()]);
      setNewMovie('');
      setShowMessage(true);
    }
  };

  const value = {
    movies,
    newMovie,
    setNewMovie,
    showMessage,
    setShowMessage,
    handleAddMovie,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};