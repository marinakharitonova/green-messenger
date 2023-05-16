import {configureStore} from '@reduxjs/toolkit'
import {mainApi} from "./apiSlice";
import authReducer from "./auth/authSlice"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import chatsReducer from "./chats/chatsSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        chats: chatsReducer,
        [mainApi.reducerPath]: mainApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector