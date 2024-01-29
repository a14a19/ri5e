import { configureStore } from "@reduxjs/toolkit"
import stateReducer from "../features/stateSlice/stateSlice"

const store = configureStore({
    reducer: {
        state: stateReducer
    },
})

export default store