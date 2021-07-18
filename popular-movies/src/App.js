import React, { useState, useEffect }from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

import { requestApiData } from "./actions";

import MovieListHeading from './components/MovieListHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import MovieList from './components/Movielist'
import NavBar from './components/NavBar'




class App extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }
  

  render() {
    const {results = [] } = this.props.data;
    return results.length
      ? <div className='container-fluid movie-app'>
		  <NavBar/>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Popular Movies' />
			</div>
			<div className='row'>
				<MovieList
					results={results}
					// handleFavouritesClick={addFavouriteMovie}
					// favouriteComponent={}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					results={results}
					// handleFavouritesClick={removeFavouriteMovie}
					// favouriteComponent={}
				/>
			</div>
		</div>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);