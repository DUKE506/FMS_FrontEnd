import { SignInDto, SignSuccess } from "@/types/sign/sign";
import { ApiResponse, post } from "..";

export const signIn = async(user: SignInDto):Promise<ApiResponse<SignSuccess>> => {
    return await post('auth/signin',user);
}