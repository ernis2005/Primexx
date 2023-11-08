import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import tracReducer from './features/trac-get'
export  const store  = configureStore ( {
    reducer: {
        authReducer,
        tracReducer
    }
}) 

export  type RootSate = ReturnType<typeof store.getState>;
export  type AppDispatch =typeof  store.dispatch;
