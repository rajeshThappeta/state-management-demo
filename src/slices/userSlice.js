import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


//making API call
export const fetchData = createAsyncThunk('usersdata', async (apiEndPoint, thunkApi) => {

    console.log("api call started");

    try {
        let response = await axios.get(apiEndPoint)
        let apiData = response.data
        return apiData;
    }
    catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }

})




export const userSlice = createSlice({
    name: "user",
    initialState: { userdata: [], isPending: false, isError: false, errMsg: '' },
    reducers: {
        // addUser: (state, action) => {
        //     state.push(action.payload)
        // }
    },
    extraReducers: {
        //deal with pending
        [fetchData.pending]: (state, action) => {
            state.isPending = true;
        },
        //deal with fulfilled
        [fetchData.fulfilled]: (state, action) => {
            state.userdata = action.payload;
            state.isPending = false;
            state.isError = false;
            state.errMsg = ''
        },
        //deal with rejected
        [fetchData.rejected]: (state, action) => {
            state.isError = true;
            state.errMsg = action.payload;
            state.isPending = false;
            state.userdata = []
        }
    }
})

//export action creator function
export const { addUser } = userSlice.actions

//export reducer of userSLice
export default userSlice.reducer