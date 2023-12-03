import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import tracReducer from './features/trac-get'
import shopReducer from './features/shop-get'
import baseparceIReducer from './features/baseparceId-get'
import passwordReducer from './features/password-patch'
import passwordRestoreReducer from './features/password-restore'
import consolidationReducer from './features/getData'
export  const store  = configureStore ( {
    reducer: {
        authReducer,
        tracReducer,
        shopReducer,
        baseparceIReducer,
        passwordReducer,
        passwordRestoreReducer,
        consolidationReducer,
    }
}) 

export  type RootSate = ReturnType<typeof store.getState>;
export  type AppDispatch =typeof  store.dispatch;
