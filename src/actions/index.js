// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const LOAD_CART = 'LOAD_CART';
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
