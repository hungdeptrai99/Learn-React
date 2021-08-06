// import { createStore, compose, applyMiddleware } from "redux";
// import rootReducer from "./reducer";
// import thunk from 'redux-thunk'

// const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
