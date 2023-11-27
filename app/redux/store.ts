import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import tracReducer from './features/trac-get'
import shopReducer from './features/shop-get'
export  const store  = configureStore ( {
    reducer: {
        authReducer,
        tracReducer,
        shopReducer,
    }
}) 

export  type RootSate = ReturnType<typeof store.getState>;
export  type AppDispatch =typeof  store.dispatch;
