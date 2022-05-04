import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
    },
    reducers: {
        authUser(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = localStorage.removeItem('token')
        },
    },
})

export const { authUser, logout } = authSlice.actions
export default authSlice.reducer