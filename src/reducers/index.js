// reducers.js
import { ADD_TO_CART } from '../actions';
import { LOAD_CART } from '../actions';

const initialState = {
    cart: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.product],
            };
        case LOAD_CART:
            return {
                ...state,
                cart: action.cart,
            };

        default:
            return state;
    }
}

export default rootReducer;
