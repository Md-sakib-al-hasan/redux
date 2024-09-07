import { createStore } from "redux"

const postCoutnElement = document.querySelector('.post-count')

const initialState = { post: 0, name: "sakib al hasan", age: 26 }

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_By = 'post/increaseBy'
const DECREMENT_BY = 'post/decreaseBy'



function reduce(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, post: state.post + 1 }
        case DECREMENT:
            return { ...state, post: state.post - 1 }
        case INCREASE_By:
            return { ...state, post: state.post + action.payload }
        case DECREMENT_BY:
            return { ...state, post: state.post - action.payload }

    }
}

const store = createStore(reduce, window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.subscribe(() => {
    console.log(store.getState())
    postCoutnElement.innerHTML = store.getState().post
})

store.dispatch({ type: INCREMENT })
store.dispatch({ type: DECREMENT })
store.dispatch({ type: INCREASE_By, payload: 10 })
store.dispatch({ type: DECREMENT_BY, payload: 5 }) 