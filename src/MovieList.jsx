import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const { movies, newMovie, setNewMovie, showMessage, setShowMessage, handleAddMovie } = useContext(MovieContext);

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showMessage, setShowMessage]); 

  return (
    <div>
      <Navbar />
      <h2>My Movie Collection</h2>
      <h3>Movies List</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
      <div className="form-container">
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Enter Movie title"
        />
        <button onClick={handleAddMovie}>Add Movie</button>
        <div>{showMessage && <p className="new-movie-message">New movie added!</p>}</div>
      </div>
    </div>
  );
};

export default MovieList;