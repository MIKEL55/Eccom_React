// import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import cartSlice from './cart/cartSlice';
// import authSlice from './authSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';




// // Combine the reducers first
// const rootReducer = combineReducers({
//   cart: cartSlice,
//   auth: authSlice
// });

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;