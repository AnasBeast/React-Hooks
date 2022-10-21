import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import "./styles.css"
const MovieCard = ({movie}) => {
  return (
    <div style={{"display":"flex","flexDirection":"column","width":"300px","alignItems":"center","color":"white"}}>
        <div class="content">
          <Link to={`/MovieDetails/${movie.id}`}>
          
            <div class="content-overlay"></div>
            <img class="content-image" src={movie.posterUrl} />
            <div class="content-details fadeIn-top">
              <h2 className='movie-title'>{movie.title}</h2>
              <p>{movie.description}</p>
              <StarRatingComponent 
              className='bottom-center'
              name='rate1'
              starCount={5}
              value={movie.rating}
              />
            </div>
          </Link>
        </div>
    </div>
  )
}

export default MovieCard