

export interface createAdminProps {
    account: string;
    password: string;
    name: string;
    email: string;
    phone: string;
    job: string;
    place: number[];
}

export interface ListAdminProps {
    id: number;
    account: string;
    name: string;
    email: string;
    phone: string;
}

export interface DetailAdminProps {
    id: number,
    account: string;
    password: string;
    name: string;
    email: string;
    phone: string;
    job: string;
    place: number[];
}