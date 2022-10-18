import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import "./styles.css"
const MovieCard = ({movie}) => {
  return (
    <div style={{"display":"flex","flexDirection":"column","width":"300px","alignItems":"center","color":"white"}}>
        <div class="content">
          <a href="#">
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
          </a>
        </div>
    </div>
  )
}

export default MovieCard