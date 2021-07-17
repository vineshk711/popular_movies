import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const MovieList = (props) => {
    return (
        <>
            {props.results.map( (movie, index) => (
                <div>
                    <img src={movie.poster_path} alt=""></img>
                </div>
            ))}
        </>
    )
}

export default MovieList;