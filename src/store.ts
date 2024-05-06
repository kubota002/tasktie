import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "./features/ClientSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { clientApi } from "./features/ClientApi";

export const store = configureStore({
    reducer: {
        client: ClientSlice,

        [clientApi.reducerPath]: clientApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(clientApi.middleware),
})

export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
