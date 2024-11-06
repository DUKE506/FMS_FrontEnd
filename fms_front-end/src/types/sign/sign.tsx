


export interface SignInDto {
    account : string;
    password : string;
    mode : boolean;
}

export interface SignSuccess{
    accessToken : string;
}