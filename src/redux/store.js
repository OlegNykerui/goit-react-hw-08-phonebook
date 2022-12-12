import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import logger from 'redux-logger';
import { filterReducer } from './reducers';
import { contactsApi } from 'redux/api';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({}).concat(contactsApi.middleware, logger);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactsApi.middleware,
  //   logger,
  // ],
});

setupListeners(store.dispatch);

// import { contactsReducer } from './slices/contactSlice';
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

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const middleware = getDefaultMiddleware =>
//   getDefaultMiddleware({
// serializableCheck: {
// ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// },
// }).concat(contactsApi.middleware, logger);

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   contacts: contactsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const persistor = persistStore(store);
