//사업장 테이블 인터페이스
export interface PlaceTableProps {
    id: number;
    code: string;
    name: string;
    addr: string;
    contractNum: string;
    tel: string;
    contractedAt: Date;
    state: boolean
}

export interface CreatePlaceProps{
    name : string;
    code : string;
    tel : string;
    addr: string;
    contractNum : string;
    contractedAt : string;
    note : string;
}