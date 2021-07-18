import React, { useState, useEffect }from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

import { requestApiData } from "./actions";
import MovieApp from "./components/MovieApp";


class App extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }
  

  render() {
    const {results = [] } = this.props.data;
    return results.length
      ? <MovieApp results={results}/>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);