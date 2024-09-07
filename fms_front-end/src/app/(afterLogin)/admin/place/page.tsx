
//사업장 테이블 인터페이스
interface PlaceTableProps {
    code: string;
    name: string;
    addr: string;
    contract_num: string;
    tel: string;
    contract_at: Date | string;
    state: PlaceState
}

const enum PlaceState {
    해약 = 0,
    계약 = 1,
    중단 = 2,
}

const mockupPlaceTable: PlaceTableProps[] = [
    {
        code: "P001",
        name: "서울 본사",
        addr: "서울특별시 강남구 테헤란로 123",
        contract_num: "C20240001",
        tel: "02-1234-5678",
        contract_at: new Date("2024-01-01"),
        state: PlaceState.계약
    },
    {
        code: "P002",
        name: "부산 지사",
        addr: "부산광역시 해운대구 해운대해변로 456",
        contract_num: "C20240002",
        tel: "051-9876-5432",
        contract_at: "2024-02-15",
        state: PlaceState.계약
    },
    {
        code: "P003",
        name: "대전 센터",
        addr: "대전광역시 유성구 대학로 789",
        contract_num: "C20240003",
        tel: "042-5555-1234",
        contract_at: new Date("2024-03-01"),
        state: PlaceState.중단
    }
]

const PlaceTableHeader = [

]

const Place = ({ }) => {
    return (
        <div>

        </div>
    )
}

export default Place;