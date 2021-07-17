import React from 'react'

import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const MovieList = (props) => {
    return (
        <div className=' '>
            {props.results.map( (movie, index) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.backdrop_path} />
                    <Card.Body>
                       <Card.Title>{movie.original_title}</Card.Title>
                        <Card.Text>{movie.release_date}</Card.Text>
                        <Button variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default MovieList;