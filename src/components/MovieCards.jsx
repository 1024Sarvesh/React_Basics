import React,{useState} from "react";
import { movies } from "../data/movies";


function MovieCard(props){


 console.log(props)

    return(
        <>
        <div class="movie-card">
      <div class="poster">
        <img src={props.movie.thumbnail} alt="Movie Poster" />

        <span class="rating">⭐ {props.movie.rating}</span>
      </div>

      <div class="content">
        <h2>{props.movie.title}</h2>

        <p>{props.movie.overview}</p>

        <button>Watch Now</button>
      </div>
    </div>
        </>
    )
}

export default MovieCard;