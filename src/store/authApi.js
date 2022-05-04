import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const API_URL = 'https://api.fullstats.ru/api/v1'

const baseQuery = fetchBaseQuery({ baseUrl: API_URL })
const baseQueryWithReauth = async(args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery('/auth/token-refresh/', api, extraOptions)
        if (refreshResult.data) {
            localStorage.setItem('token', refreshResult.data)
            result = await baseQuery('/auth/token-refresh/', api, extraOptions)
        } else {
            localStorage.removeItem('token')
        }
    }
    return result
}

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (body) => ({
                url: '/auth/login/',
                method: 'post',
                body
            }),
        }),
    })
})

export const { useLoginUserMutation } = authAPI