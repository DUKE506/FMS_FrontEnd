

export interface createAdminProps{
    account : string;
    password : string;
    name : string;
    email : string;
    phone : string;
    place : number[];
}

export interface ListAdminProps {
    id: number;
    account : string;
    name : string;
    email : string;
    phone : string;
}