import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {


  render() {
    return (
      <div id="movie-showcase">
        {
        movieData.map((movie) => {
          const titleData = movie.title
          const ratingData = movie.IMDBRating
          const posterData = movie.poster
          const genreData = movie.genres
          console.log(movie)
          return (
            <MovieCard title={titleData} rating={ratingData} genres={genreData} poster={posterData}/>
          )
        })
        }
      </div>
    )
  }
}
