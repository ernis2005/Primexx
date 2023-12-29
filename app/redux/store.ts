import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import tracReducer from './features/trac-get'
import shopReducer from './features/shop-get'
import baseparceIReducer from './features/baseparceId-get'
import passwordReducer from './features/password-patch'
import passwordRestoreReducer from './features/password-restore'
import consolidationReducer from './features/getData'
import saveChangesReducer from './features/save-changes'
import aboutUsSlice from './features/about-us'
import aboutBlogSlice from './features/about-blog'
import rateSlice from './features/about-rates'
import aboutHomeSlice from './features/about-home'
import purchaseOrdercreatSlice from './features/purchaseOrdercreat'
import consolidationSlice from './features/consolidation-slice'
export  const store  = configureStore ( {
    reducer: {
        authReducer,
        tracReducer,
        shopReducer,
        baseparceIReducer,
        passwordReducer,
        passwordRestoreReducer,
        consolidationReducer,
        saveChangesReducer,
        aboutUsSlice,
        aboutBlogSlice,
        rateSlice,
        aboutHomeSlice,
        purchaseOrdercreatSlice,
        consolidationSlice
    }
}) 

export  type RootSate = ReturnType<typeof store.getState>;
export  type AppDispatch =typeof  store.dispatch;
