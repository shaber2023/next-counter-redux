const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    count : 0
}
export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        increment : (state)=>{
            state.count+=1
        },
        incrementByAmount : (state,action)=>{
            state.count+=action.payload
        }
    }
})

export const {increment,incrementByAmount}=counterSlice.actions;
export default counterSlice.reducer