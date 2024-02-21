// reducers.js
import { ADD_TO_CART } from '../actions';
import { LOAD_CART } from '../actions';
import { REMOVE_FROM_CART } from '../actions';
import { DECREASE_QUANTITY } from '../actions';
import { UPDATE_QUANTITY } from '../actions';

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
        case UPDATE_QUANTITY:
            return state.map((product) =>
                product.id === action.payload.id ? { ...product, quantity: action.payload.quantity } : product,
            );
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.product.id),
            };
        case DECREASE_QUANTITY:
            return state.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 }
                    : product,
            );
        default:
            return state;
    }
}

export default rootReducer;
