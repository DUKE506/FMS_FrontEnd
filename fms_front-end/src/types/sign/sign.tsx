import { User } from "@/lib/features/auth/authSlice";



export interface SignInDto {
    account : string;
    password : string;
    mode : boolean;
}

export interface SignSuccess{
    user : User;
    accessToken : string;
}