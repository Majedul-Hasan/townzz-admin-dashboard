import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface CounterState {
    name: string,
    role: string,
    token: string
}

// Define the initial state using that type
const initialState: CounterState = {
    name: "",
    role: "",
    token: ""

}

export const adminAuth = createSlice({
    name: 'Auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.role = action.payload.role
        },
        logOut: (state, action) => {
            state.name = ""
            state.role = ""
        }
    },
})

export const { setUser, logOut } = adminAuth.actions

// Other code such as selectors can use the imported `RootState` type

export default adminAuth.reducer