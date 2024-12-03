import { Admin, ListAdminProps } from "../administrator/adminstrator";
import { GroupDto } from "../group/group";

//사업장 테이블 인터페이스
export interface PlaceTableProps {
    id: number;
    code: string;
    name: string;
    addr: string;
    contractNum: string;
    tel: string;
    contractedAt: Date | string;
    state: boolean
}

export interface CreatePlaceProps {
    name: string;
    code: string;
    tel: string;
    addr: string;
    contractNum: string;
    contractedAt: Date | null;
    note: string; // 삭제 예정
    machinePerm: boolean,
    electricPerm: boolean,
    liftPerm: boolean,
    firePerm: boolean,
    constructPerm: boolean,
    networkPerm: boolean,
    beautyPerm: boolean,
    securityPerm: boolean,
    energyPerm: boolean,
    vocPerm: boolean,
    user: ListAdminProps[],
}

export interface DetailPlaceProps {
    id: number;
    code: string;
    name: string;
    addr: string;
    tel: string;
    contractNum: string;
    contractedAt: Date;
    canceledAt: Date;
    state: boolean
    machinePerm: boolean,
    electricPerm: boolean,
    liftPerm: boolean,
    firePerm: boolean,
    constructPerm: boolean,
    networkPerm: boolean,
    beautyPerm: boolean,
    securityPerm: boolean,
    energyPerm: boolean,
    vocPerm: boolean,
}

export interface DetailPlaceInfoProps { 
    id: number;
    code: string;
    name: string;
    addr: string;
    tel: string;
    contractNum: string;
    contractedAt: Date;
    canceledAt: Date;
    state: boolean
}

export interface DetailPlacePermProps{
    machinePerm: boolean,
    electricPerm: boolean,
    liftPerm: boolean,
    firePerm: boolean,
    constructPerm: boolean,
    networkPerm: boolean,
    beautyPerm: boolean,
    securityPerm: boolean,
    energyPerm: boolean,
    vocPerm: boolean,
}

export interface PlaceListProps {
    id: number;
    name: string;
    contractNum: string;
}

/**
 * 담당 관리자 조회 DTO
 */
export interface PlaceAdminProps {
    //adminplace 테이블 id
    placeAdminId: number;
    //관리자 id
    id: number;
    //
    account? : string;
    //관리자 이름
    name: string;
    //관리자 그룹명
    group: GroupDto;
    //관리자 이메일
    email: string;
    //관리자 전화번호
    phone: string;
    //관리자 권한 수준
    job: string;
}