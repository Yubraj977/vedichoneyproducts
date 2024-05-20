import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken,setToken,removeToken } from "../../../src/heplers/utils/HelperFun";


export const login=createAsyncThunk('user/login',async (payload)=>{
const response=await api.post('/')
})