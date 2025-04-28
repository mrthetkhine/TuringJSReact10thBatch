import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";
import {counterSlice, incrementByAmount, selectCount} from "@/lib/features/counter/counterSlice";
import {AppThunk} from "@/lib/store";

export interface SimpleCounterState
{
    count :number
}
const initialState: SimpleCounterState ={
    count : 0
}
export const simpleCounterSlice = createAppSlice({
    name: "simpleCounter",
    initialState,
    reducers:(create) => ({
        inc: create.reducer((state) => {
            state.count += 1;
        }),
        dec: create.reducer((state) => {
            state.count -= 1;
        }),
        incByAmount:create.reducer((state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },),
    }),
    selectors:{
        selectCounter: (state) => state.count,

    },
});
export const { inc, dec } =
    simpleCounterSlice.actions;
export const { selectCounter } = simpleCounterSlice.selectors;
export const incAmountAfterSecond =
    (amount: number): AppThunk =>
    (dispatch, getState) => {
        setTimeout(()=>{
            console.log('Fired thunk');
            dispatch(inc())
        },1000);
    };