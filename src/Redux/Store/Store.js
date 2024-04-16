import { configureStore } from "@reduxjs/toolkit";
import { DoctorSlice } from "../Slice/DoctorSlice";

export const store = configureStore({
    reducer : {
        doctor : DoctorSlice.reducer
    }
})