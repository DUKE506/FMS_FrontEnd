import { combineReducers, configureStore } from '@reduxjs/toolkit'

import placeReducer from './features/place/placeSlice'
import placeTableReducer from './features/place/placeTableSlice'
import placeListReducer from './features/place/placeListSlice'
import placeDetailReducer from './features/place/placeDetailSlice'
import adminReduce from './features/administrator/adminSlice'
import adminList from './features/administrator/adminFindSlice'
import adminDetailReducer from './features/administrator/adminDetailSlice'
import adminPlaceReducer from './features/administrator/adminPlaceSlice'
import signInReducer from './features/user/signInSlice'
import groupReducer from './features/group/groupSlice'
import authReducer from './features/auth/authSlice'
import adminClickReducer from './features/administrator/adminClickAdminSlice'
import sessionStorage from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'


const persistConfig = {
  key : 'root',
  storage: sessionStorage,
  whitelist:['authUser']
}

// const store = configureStore({
//   reducer: {
//     place: placeReducer,
//     placeTable: placeTableReducer,
//     placeList: placeListReducer,
//     placeDetail: placeDetailReducer,
//     admin: adminReduce,
//     adminList: adminList,
//     adminDetail: adminDetailReducer,
//     adminPlace: adminPlaceReducer,
//     signIn :signInReducer,
//     groupAll : groupReducer,
//     authUser : authReducer,
//     clickAdmin : adminClickReducer,
//   },
// })
// Combine Reducers
const rootReducer = combineReducers({
  place: placeReducer,
  placeTable: placeTableReducer,
  placeList: placeListReducer,
  placeDetail: placeDetailReducer,
  admin: adminReduce,
  adminList: adminList,
  adminDetail: adminDetailReducer,
  adminPlace: adminPlaceReducer,
  signIn: signInReducer,
  groupAll: groupReducer,
  authUser: authReducer, // Only this reducer will persist
  clickAdmin: adminClickReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;