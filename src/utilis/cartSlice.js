import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        resetItem: (state) => {
            state.items = []
        },
        removeItem: (state, action) => {
            state.items.pop(action.payload)
        }
    }
})

export default cartSlice.reducer;

export const {addItem, resetItem, removeItem} = cartSlice.actions