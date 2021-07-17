import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

import { requestApiData } from "./actions";

import MovieList from './components/movielist'


class App extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const {results = [] } = this.props.data;
    return results.length
      ? <div className='container-fluid movie-list'>
          <div className="row">
            <MovieList results={results}/>
          </div>
        </div>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);