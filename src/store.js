import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import userReducer from './slices/userSlice'


export const store = configureStore({
    reducer: {
        //todosSlice
        todo: todoReducer,
        users: userReducer

    }
})