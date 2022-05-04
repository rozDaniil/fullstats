import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import { authAPI } from './authApi'

const rootReducer = combineReducers({
    authSlice,
    [authAPI.reducerPath]: authAPI.reducer
})

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)
})