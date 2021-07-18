import { ADD_FAVOURITES, REMOVE_FAVOURITES } from "../actions";

export default (state = {}, {type, data}) => {
    switch (type) {
        case ADD_FAVOURITES:
            return {
                ...state,
                
            }
    }
}




// export default (state = {}, { type, data }) => {
//     switch (type) {
//       case RECEIVE_API_DATA:
//         return data;
//       default:
//         return state;
//     }
//   };
