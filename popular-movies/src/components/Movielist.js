import React from 'react'

import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddFavourite from './AddFavourites'


const MovieList = (props) => { 
    return (
        <div className='d-flex  m-3' >
            {props.results.map( (movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                <img className='image' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt='movie'></img>
                <div
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='overlay d-flex align-items-center justify-content-center'
                >
                    <AddFavourite />
                </div>
                {/* <div className='d-flex align-items-center justify-content-center'>
                    <h6>{movie.original_title}</h6>
                </div> */}
            </div>
            ))}
        </div>
    )
}

export default MovieList;