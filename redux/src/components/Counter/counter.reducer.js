import * as types from "./counter.constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const increase = createAction("counter/increase");
export const decrease = createAction("counter/decrease");

const initialState = {
  count: 0,
};

// const counterReducer = createReducer(initialState, {
//     [increase] : (state,action) => {
//         state.count = state.count + 1
//     },
//     [decrease] : (state,action) => {
//         state.count = state.count -1
//     }
// })
const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increase, (state, action) => {
    state.count = state.count + 1;
  });
  builder.addCase(decrease, (state, action) => {
    state.count = state.count - 1;
  });
});

export default counterReducer;
