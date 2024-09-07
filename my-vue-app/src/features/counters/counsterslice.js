import { createSlice } from "@reduxjs/toolkit";
const intialState = [
    {
        id: 1,
        value: 1,
    },
    {
        id: 2,
        value: 2,
    },
];
const countersSlice = createSlice({
    name: 'counters',
    initialState: intialState,
    reducers: {
        increment: (state, action) => {
            const counterindex = state.findIndex(
                (c) => c.id === action.payload
            );

            state[counterindex].value++;
        },
        decrement: (state, action) => {
            const counterindex = state.findIndex(
                (c) => c.id === action.payload
            );

            state[counterindex].value--;

        }
    }
});

export default countersSlice.reducer;

export const { increment, decrement } = countersSlice.actions;