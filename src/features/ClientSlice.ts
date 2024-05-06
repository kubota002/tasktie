import { createSlice } from "@reduxjs/toolkit";
import { clientApi } from "./ClientApi";

//使用する変数を宣言
export interface State{
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | undefined;
    clientName: string | undefined;
    reading: string | undefined;
    phone: number | undefined;
    address: string | undefined;
    email: string | undefined;
    memo: string | undefined;
}
const initialState: State = {
    status: "idle",
    error: undefined,
    clientName: undefined,
    reading: undefined,
    phone: undefined,
    address: undefined,
    email: undefined,
    memo: undefined,
}

export const ClientSlice = createSlice({
    name: "ClientSlice",
    initialState,
    //dispatchで呼び出す関数を宣言
    reducers: {
        //全てのステートを初期状態にリセット
        resetState(state) {
            return initialState;
        },
        setClientName(State, action) {
            State.clientName = action.payload;
        },
        setReading(state, action) {
            state.reading = action.payload;
        },
        setPhone(state, action) {
            state.phone = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setMemo(state, action) {
            state.memo = action.payload;
        }
    },
    
 })

export const {
    setClientName,
    setReading,
    setPhone,
    setAddress,
    setEmail,
    setMemo,
} = ClientSlice.actions;

export default ClientSlice.reducer;