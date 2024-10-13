import { configureStore } from '@reduxjs/toolkit'
import placeReducer from './features/place/placeSlice'
import placeTableReducer from './features/place/placeTableSlice'
import placeDetailReducer from './features/place/placeDetailSlice'

const store = configureStore({
  reducer: {
    place: placeReducer,
    placeTable: placeTableReducer,
    placeDetail: placeDetailReducer,
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