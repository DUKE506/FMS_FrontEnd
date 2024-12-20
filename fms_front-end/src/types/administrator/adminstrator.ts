import { GroupDto } from "../group/group";



export interface createAdminProps {
    account: string;
    password: string;
    name: string;
    email: string;
    phone: string;
    job: string;
    place: number[];
    group: number;
}

export interface ListAdminProps {
    id: number;
    account: string;
    name: string;
    email: string;
    phone: string;
    job: string;
    group: GroupDto;
    state: string | null
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
    group: GroupDto;
    adminplaces?: number[];
}