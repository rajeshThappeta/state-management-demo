import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

//export action creator function
export const { addUser } = userSlice.actions

//export reducer of userSLice
export default userSlice.reducer