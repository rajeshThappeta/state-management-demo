import { createSlice } from '@reduxjs/toolkit'

//create a slice
export const todoListSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            //add new todo to initialState
            state.push(action.payload)
        }
    }
})

//create action creator functions
export const { addTodo } = todoListSlice.actions

//export reducer
export default todoListSlice.reducer