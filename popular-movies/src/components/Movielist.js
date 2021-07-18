import React from 'react'

const MovieList = (props) => { 
    const FavouriteComponent = props.favouriteComponent
    return (
        <div className='d-flex  m-3' >
            {props.results.map( (movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                <img className='image' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt='movie'></img>
                <div
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='overlay d-flex align-items-center justify-content-center'
                >
                    <FavouriteComponent/>
                </div>
            </div>
            ))}
        </div>
    )
}

export default MovieList;