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
