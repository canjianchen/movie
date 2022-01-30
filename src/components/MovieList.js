import React, { useState } from 'react';
import Spinner from './misc/Spinner';
import classes from '../styles/MovieList.module.css';
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const [error] = useState(false);

  const { disableNominateButton } = props;

  return (
    <div className={classes.Container}>
      <div>
        {props.movies.map((movie, index) => (
          <div key={index} class={classes.center}>
            {/* <div className={classes.MovieDiv}>
              <div className={classes.MovieCard}>
                <div>
                  {movie.Title} • {movie.Year}
                </div>
                <div>
                  <button
                    className={classes.Button}
                    onClick={() => props.handleNominate(movie)}
                    disabled={disableNominateButton(movie.imdbID)}
                  >
                    Nominate
                  </button>
                </div>
              </div>
            </div> */}
            
              <img
                className="mr-3"
                style={{
                  objectFit: "contain",
                  height: "160px",
                  width: "160px",
                }}
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://bitsofco.de/content/images/2018/12/broken-1.png"
                }
                alt="Movie Poster Name"
              />
              <div className="d-flex flex-column justify-content-center">
                <div className="f-22 mb-3 fw-400">
                  <span className="fw-600">{movie.Title}</span> ({movie.Year})
                  
                </div>
                <div>
      
                    <button
                      onClick={() => {
                        props.handleNominate(movie)
                      }}
                      className={classes.Button}
                      disabled={disableNominateButton(movie.imdbID)}
                    >
                      Nominate
                    </button>
                  
                </div>
              </div>
            
          </div>
        ))}

        {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

        {!props.isLoading && error ? (
          <div>
            <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieList;
