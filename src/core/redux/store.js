import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authReducer.tsx'
import playerReducer from './playerReducer.tsx'
import playersReducer from './playersReducer.tsx'
import teamReducer from './teamReducer.tsx'

const store = configureStore({
    reducer: {
        auth:authReducer,    
        player:playerReducer,
        players:playersReducer,
        team:teamReducer
    }
})

export default store