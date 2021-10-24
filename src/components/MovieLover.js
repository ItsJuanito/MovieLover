import React, { useState } from 'react';
import { MovieCard } from './MovieCard';

const API_KEY = 'f9fae99978fe943f1c71d0e13a261c16';
///movie/upcoming
export const MovieLover = () => {
    const [result, setResult] = useState([]);

    const onLoad = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
          )
            .then((res) => res.json())
            .then((data) => {
              if (!data.errors) {
                setResult(data.results);
              } else {
                setResult([]);
              }
            });
    }
    return (
        <div onChange={onLoad}>
            {result.map((movie) => (
                <li key={movie.id}>
                    <MovieCard movie={movie}/>
                </li>
              ))}
        </div>
    );
};
export default MovieLover;