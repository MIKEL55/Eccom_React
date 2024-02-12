import { configureStore, combineReducers } from '@reduxjs/toolkit';


import cartSlice from './cart/cartSlice';
import authSlice from './authSlice';
import authErrorSlice from './authErrorSlice';
import tokenSlice from './tokenSlice';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const appReducer = combineReducers({
  cart: cartSlice,
  auth: authSlice,
  authtoken:tokenSlice,
  autherror : authErrorSlice,
})


// Combine the reducers first
const rootReducer = (state,action) =>{
  if (action.type === 'USER_LOGOUT') {
    storage.removeItem('persist:root')
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist : ['authtoken','autherror']
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;