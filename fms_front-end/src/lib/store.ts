import { configureStore } from '@reduxjs/toolkit'
import placeReducer from './features/place/placeSlice'
import placeTableReducer from './features/place/placeTableSlice'
import placeListReducer from './features/place/placeListSlice'
import placeDetailReducer from './features/place/placeDetailSlice'
import adminReduce from './features/administrator/adminSlice'
import adminList from './features/administrator/adminFindSlice'
import adminDetailReducer from './features/administrator/adminDetailSlice'
import adminPlaceReducer from './features/administrator/adminPlaceSlice'
import signInReducer from './features/user/signInSlice'
const store = configureStore({
  reducer: {
    place: placeReducer,
    placeTable: placeTableReducer,
    placeList: placeListReducer,
    placeDetail: placeDetailReducer,
    admin: adminReduce,
    adminList: adminList,
    adminDetail: adminDetailReducer,
    adminPlace: adminPlaceReducer,
    signIn :signInReducer,
  },
})


// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;