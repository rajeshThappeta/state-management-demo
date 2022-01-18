import { createSlice } from '@reduxjs/toolkit'

//create a slice
export const todoListSlice = createSlice({
    name: 'todos',
    initialState: ['sleeping', 'eating','running']
})


export default todoListSlice.reducer