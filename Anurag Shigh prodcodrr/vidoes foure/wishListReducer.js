export const WISHLIST_REMOVE_ITEM = 'whishlist/removeItem'
export const WISHLIST_ADD_ITEM = 'wishlist/addItem'

export default function whishlistRedeucer(state = [], action) {
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            return [...state.wishlist, action.payload]
        case WISHLIST_REMOVE_ITEM:
            return state.filter(item => item.productId !== action.payload.productId)
        default:
            return state;
    }
}