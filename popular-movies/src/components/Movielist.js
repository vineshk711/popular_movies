import React from 'react'

import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddFavourite from './AddFavourites'


const MovieList = (props) => {
    return (
        <div className='d-flex justify-content-start m-3' >
            {props.results.map( (movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                <img src="https://image.tmdb.org/t/p/w500//lFSSLTlFozwpaGlO31OoUeirBgQ.jpg" alt='movie'></img>
                <div
                    // onClick={() => props.handleFavouritesClick(movie)}
                    className='overlay d-flex align-items-center justify-content-center'
                >
                    {/* <FavouriteComponent /> */}
                </div>
            </div>
            ))}
        </div>
    )
}

export default MovieList;