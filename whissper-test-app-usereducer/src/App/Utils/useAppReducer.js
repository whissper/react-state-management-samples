import React, { useReducer } from 'react';

const AppDispatch = React.createContext(null);

function reducer(state, action) {
    switch (action.type) {
        case 'setCount':
            return { ...state, count: action.count };
        default:
            return state;
    }
}

function useAppReducer(initialState) {
    return useReducer(reducer, initialState);
}

export default useAppReducer;
export { AppDispatch };