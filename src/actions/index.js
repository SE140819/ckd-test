// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const LOAD_CART = 'LOAD_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';


export const CLEAR_CART = 'CLEAR_CART';
export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        product,
    };
}
export function loadCart(cart) {
    return {
        type: LOAD_CART,
        cart,
    };
}
export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        product,
    };
}

export function updateQuantity(product, quantity) {
    return {
        type: UPDATE_QUANTITY,
        product,
        quantity,
    };
}

export function decreaseQuantity(id) {
    return {
        type: DECREASE_QUANTITY,
        payload: id,
    };
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};