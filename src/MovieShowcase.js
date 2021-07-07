import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  constructor(props){
    super(props)
  }
  generateMovieCards = () => {
    
  }

  render() {
    
    const movieCards = movieData.map(movie => {
      return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>
    })
    
    
    
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        {movieCards}
      </div>
    )
  }
}
