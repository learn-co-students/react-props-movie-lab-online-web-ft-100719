import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

/*
  generateMovieCards maps over the supplied data and creates a movie card passing the information from said data
  to the new card. Then inside render we return a div that calls generateMovieCards()
*/
