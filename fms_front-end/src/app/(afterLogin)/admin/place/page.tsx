"use client"

import BaseContainer from "@/components/BaseContainer/Base";
import { Body, Columns, Header, HeaderCell, HeaderRow, Table } from "./_components/Table/Table";
import styles from './page.module.css'
import { AnalysisCard } from "./_components/Card/AnalysislCard";

//사업장 테이블 인터페이스
interface PlaceTableProps {
    code: string;
    name: string;
    addr: string;
    contract_num: string;
    tel: string;
    contract_at: Date | string;
    state: number
}

enum PlaceState {
    해약 = 0,
    계약 = 1,
    중단 = 2,
}

const getPlaceStateText = (state : PlaceState) : string =>{
    return PlaceState[state];
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

const Place = ({ }) => {
    console.log(mockupPlaceTable[0].code)
    const colums = [
        {header : "코드", accessor : 'code' as const},
        {header : "이름", accessor : 'name' as const},
        {header : "주소", accessor : 'addr' as const},
        {header : "계약번호", accessor : 'contract_num' as const},
        {header : "전화번호", accessor : 'tel' as const},
        { 
            header: "계약일자", 
            accessor: 'contract_at' as const,
            render: (value: Date | string) => value instanceof Date ? value.toLocaleDateString() : value
        },
        {
            header : "계약상태", 
            accessor : 'state' as const,
            render: (value: number) => getPlaceStateText(value as PlaceState)
        },
        
    ];

    return (
        <div className={styles.place}>
            <div className={styles.analysis_section}>
                <BaseContainer>
                    <AnalysisCard title='전체 사업장수' value={mockupPlaceTable.length}/>
                </BaseContainer>
                <BaseContainer>
                    <AnalysisCard title='사업장별 평균 매니저 수' value={4.6}/>
                </BaseContainer>
                <BaseContainer>
                    <AnalysisCard title='사업장별 평균 직원 수' value={24.8}/>
                </BaseContainer>
            </div>
            <BaseContainer>
                <Table data={mockupPlaceTable}>
                    <Header>
                        <HeaderRow>
                            {colums.map((headercol, idx) => (
                                <HeaderCell key={idx}>
                                    {headercol.header}
                                </HeaderCell>
                            ))}
                        </HeaderRow>
                    </Header>
                    <Body>
                        <Columns columns={colums}/>
                    </Body>
                </Table>
            </BaseContainer>
        </div>
        
        
    )
}

export default Place;