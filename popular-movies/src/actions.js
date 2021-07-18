export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const addFavourites = data => ({type: ADD_FAVOURITES, data})
export const removeFavourites = data => ({type: REMOVE_FAVOURITES, data})