const initialState = 4;

export const changeTheNumber = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        default: return state;
    }
}
