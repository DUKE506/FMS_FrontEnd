

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
    admin: Admin,
    places: AdminPlaceList[]
}

export interface AdminPlaceList {
    adminPlaceId?: number;
    id: number;
    name: string;
    contractNum: string;
}

export interface Admin {
    id: number,
    account: string;
    password: string;
    name: string;
    email: string;
    phone: string;
    job: string;
    place?: number[];
}