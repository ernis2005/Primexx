import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import tracReducer from './features/trac-get'
import shopReducer from './features/shop-get'
import baseparceIReducer from './features/baseparceId-get'
import passwordReducer from './features/password-patch'
export  const store  = configureStore ( {
    reducer: {
        authReducer,
        tracReducer,
        shopReducer,
        baseparceIReducer,
        passwordReducer,
    }
}) 

export  type RootSate = ReturnType<typeof store.getState>;
export  type AppDispatch =typeof  store.dispatch;
