import localStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {storage} from ".../components/firebase.js";

import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "../reducer/reducer.js";


const persistConfig = {
  key: "root",
  storage:{storage} ,
  
};



const persistedReducer = persistReducer(persistConfig, galleryReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

/* export const store = configureStore({
  reducer: galleryReducer,
}); */

export default store;