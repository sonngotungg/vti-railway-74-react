// Define your initial state
export const initialState = {
    count: 0,
};
  
// Create a reducer function to manage state changes
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'SUBTRACT':
            return {...state, count: state.count - 1}
        default:
            return state;
    }
};