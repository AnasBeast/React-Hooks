import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({MovieData}) => {
  return (
    <div style={{"display":"flex", "gap":"20px","justifyContent":"space-around","flexWrap":"wrap","padding":"20px",height:"100%","backgroundImage":"url(https://gomytech.gomycode.co/content/images/2020/12/bah-launch-01-min.jpg)","backgroundSize":"cover"}}>
        {
            MovieData.map((movie) => (
                
                <MovieCard movie = {movie} />
                
            ))
        }
    </div>
  )
}

export default MovieList