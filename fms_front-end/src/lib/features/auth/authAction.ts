import { signIn } from "@/app/api/user/user";
import { SignInDto } from "@/types/sign/sign";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";



//로그인 thunk
export const loginAction = createAsyncThunk(
    'auth/login',
    async(user:SignInDto,{ rejectWithValue })=>{
        try{
            const res = await signIn(user);
            if(!res.data.accessToken){
                return rejectWithValue('로그인 실패');
            }
            Cookies.set('accessToken',res.data.accessToken,{ 
                // 보안 옵션 추가 가능
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });
            return res.data
        }catch(err){
            console.error('Login error:', err);
            return rejectWithValue(err || '로그인 중 오류 발생');
        }
    }
)