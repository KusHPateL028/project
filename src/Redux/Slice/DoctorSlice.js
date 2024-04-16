import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doctor :[],
}

export const DoctorSlice = createSlice({
    name:"doctor",
    initialState,
    reducers : {
        add:(state=initialState,action)=>{
            state.doctor=(action.payload)
        }
    }
})


export const { add } = DoctorSlice.actions
export default DoctorSlice.reducer