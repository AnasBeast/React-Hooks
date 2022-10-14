import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
  return (
    <div style={{"display":"flex","flexDirection":"column","width":"300px","alignItems":"center","color":"white"}}>
        <h1>{movie.title}</h1>
        <img src={movie.posterUrl} alt="" style={{"width":"300px" , "height":"400px"}}/>
        <p>{movie.description}</p>
        <StarRatingComponent 
            name='rate1'
            starCount={5}
            value={movie.rating}
        />

    </div>
  )
}

export default MovieCard