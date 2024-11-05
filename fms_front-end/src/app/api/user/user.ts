import { SignInDto } from "@/types/sign/sign";
import { ApiResponse, post } from "..";

export const signIn = async(user: SignInDto):Promise<ApiResponse<SignInDto>> => {
    return await post('auth/signin',user);
}