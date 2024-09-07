export const CART_ADD_ITEM = 'cart/addItem'
export const CART_REMOVE_ITEM = 'cart/removeItem'
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
export const CART_ITEM_DECEASE_QUANTITY = 'cart/decreaseItemQuantity'

export default function carReducer(state = [], action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            return [...state.cartItems, action.payload]
        case CART_REMOVE_ITEM:
            return state.filter(cartItem => cartItem.productId !== action.payload.productId)
        case CART_ITEM_INCREASE_QUANTITY:
            return state.map(item => item.productId === action.payload.productId ? { ...item, quantity: item.quantity + 1 } : item)
        case CART_ITEM_DECEASE_QUANTITY:
            return state.map(item => item.productId === action.payload.productId ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0)

        default:
            return state;
    }
}