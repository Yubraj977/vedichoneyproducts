import { createSlice } from '@reduxjs/toolkit'
import {login} from '../middleware/userfetch'
const initialState = {
    currentUser: null,
    token:null,
    error: null,
    loading: false,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
            state.error=false;

        },
        signInSucess:(state,action)=>{
            const {currentUser,accessToken}=action.payload
            state.currentUser=currentUser;
            state.loading=false;
            state.error=null;
            state.token=accessToken;
        },
        signInFaliure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        signOutSucess:(state)=>{
            state.currentUser=null,
            state.error=null,
            state.error=false
        }
    }
})
export const{signInStart,signInSucess,signInFaliure,signOutSucess}=userSlice.actions
export default userSlice.reducer;