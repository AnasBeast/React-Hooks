import React from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import "./styles.css"
import StarRatingComponent from 'react-star-rating-component'

const MovieDetails = ({MovieData}) => {
    const navigate = useNavigate()
   
    const {id} = useParams();
    const MovieDetails = MovieData.find(movie => movie.id == id )
   
  return (
    <div className='movie-container'>
        <h1 className='movie-title'>{MovieDetails.title}</h1>
        <div className='movie-content'>
        <img src={MovieDetails.posterUrl} alt="" className='movie-poster'/>
        <div>
        <p className='movie-description'>{MovieDetails.description}</p>
        <StarRatingComponent
              className='bottom-center'
              name='rate1'
              starCount={5}
              value={MovieDetails.rating}
              />
        </div>
        </div>
        <iframe className='movie-trailer' width="560" height="315" src={MovieDetails.trailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Button variant="outline-info" onClick={()=>navigate("/")}>Home Page</Button>
    </div>
  )
}

export default MovieDetails