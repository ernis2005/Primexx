import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { Api } from '@/app/api';

export const postConsolidationS = createAsyncThunk(  

    'consolidation/postConsolidation', async function (data, { dispatch, rejectWithValue }) {
        
        const phoneNumberWithoutMask = data.phone.replace(/\D/g, '');
        try {
            await axios.post(`${Api}flight/consultation_order/create/`,  {  fullname: data.name,   phone: phoneNumberWithoutMask, })
            
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const consolidationSlice = createSlice({
    initialState: {
        consolidation: [],
        FAQData: [],
        status: null,
        error: null,
    },
  
    name: 'consolidation',
    reducers: {
       
        addData: (state, action) => {
            state.consolidation = action.payload[0]
        }
    },
    extraReducers: {
 
        [postConsolidationS.pending]: (state, action) => {
            state.status = 'loading'
        },
        [postConsolidationS.fulfilled]: (state, action) => {
            state.status = 'success'
        },
        [postConsolidationS.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    }
})

export const {_} = consolidationSlice.actions
export default consolidationSlice.reducer