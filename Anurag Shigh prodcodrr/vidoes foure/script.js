import { combineReducers, createStore } from 'redux'
import { productsList } from "./productsList";
import productsReducer from './productsReducer';
import carReducer from './carReducer';
import whishlistRedeucer from './wishListReducer';

const initialState =
{
    products: productsList,
    cartItems: [],
    wishlist: [],
}

const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
const CART_ITEM_DECEASE_QUANTITY = 'cart/decreaseItemQuantity'


const WISHLIST_ADD_ITEM = 'wishlist/addItem'
const WISHLIST_REMOVE_ITEM = 'whishlist/removeItem'

function reducer(state = initialState, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        case CART_REMOVE_ITEM:
            return { ...state, cartItems: state.cartItems.filter(cartItem => cartItem.productId !== action.payload.productId) }
        case CART_ITEM_INCREASE_QUANTITY:
            return { ...state, cartItems: state.cartItems.map(item => item.productId === action.payload.productId ? { ...item, quantity: item.quantity + 1 } : item) }
        case CART_ITEM_DECEASE_QUANTITY:
            return { ...state, cartItems: state.cartItems.map(item => item.productId === action.payload.productId ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0) }
        case WISHLIST_ADD_ITEM:
            return { ...state, wishlist: [...state.wishlist, action.payload] }
        case WISHLIST_REMOVE_ITEM:
            return { ...state, wishlist: state.wishlist.filter(item => item.productId !== action.payload.productId) }
        default:
            return state;
    }

}

// const reducer = combineReducers({
//     products: productsReducer,
//     cartItems: carReducer,
//     whishlist: whishlistRedeucer,


// })

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } })

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 15, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 6, quantity: 1 } })
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 6 } })
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 12 } })
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 12 } })
store.dispatch({ type: CART_ITEM_DECEASE_QUANTITY, payload: { productId: 12 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 12 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 11 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 12 } })























// import { createStore } from "redux"

// const postCoutnElement = document.querySelector('.post-count')

// const initialState = { post: 0, name: "sakib al hasan", age: 26 }

// const INCREMENT = 'post/increment'
// const DECREMENT = 'post/decrement'
// const INCREASE_By = 'post/increaseBy'
// const DECREMENT_BY = 'post/decreaseBy'



// function reduce(state = initialState, action) {
//     switch (action.type) {
//         case INCREMENT:
//             return { ...state, post: state.post + 1 }
//         case DECREMENT:
//             return { ...state, post: state.post - 1 }
//         case INCREASE_By:
//             return { ...state, post: state.post + action.payload }
//         case DECREMENT_BY:
//             return { ...state, post: state.post - action.payload }

//     }
// }

// const store = createStore(reduce, window.__REDUX_DEVTOOLS_EXTENSION__?.())

// store.subscribe(() => {
//     console.log(store.getState())
//     postCoutnElement.innerHTML = store.getState().post
// })

// store.dispatch({ type: INCREMENT })
// store.dispatch({ type: DECREMENT })
// store.dispatch({ type: INCREASE_By, payload: 10 })
// store.dispatch({ type: DECREMENT_BY, payload: 5 }) 