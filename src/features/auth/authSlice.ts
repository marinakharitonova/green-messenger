import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInstance} from "../../types/IInstance";
import {RootState} from "../store";

type AuthState = IInstance

const authSlice = createSlice({
    name: 'auth',
    initialState: {idInstance: 0, apiTokenInstance: ''} as AuthState,
    reducers: {
        login: (state, action: PayloadAction<IInstance>) => {
            state.apiTokenInstance = action.payload.apiTokenInstance
            state.idInstance = action.payload.idInstance
        }
    }
})

export const {login} = authSlice.actions

export default authSlice.reducer

export const selectIdInstance = (state: RootState) => state.auth.idInstance
export const selectApiTokenInstance = (state: RootState) => state.auth.apiTokenInstance
