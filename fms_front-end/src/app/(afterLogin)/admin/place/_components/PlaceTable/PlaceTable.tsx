"use client"

import { Body, Columns, Header, HeaderCell, HeaderRow, Table } from "../../../../_components/Table/Table";
import { useState } from "react";
import { PlaceTableProps } from "@/types/place/place.type";





const getPlaceStateText = (state: boolean): string => {
    return state ? '계약' : '해약';
}


//Table Header
const colums = [
    { header: "코드", accessor: 'code' as const },
    { header: "이름", accessor: 'name' as const },
    { header: "주소", accessor: 'addr' as const },
    { header: "계약번호", accessor: 'contractNum' as const },
    { header: "전화번호", accessor: 'tel' as const },
    {
        header: "계약일자",
        accessor: 'contractedAt' as const,
        render: (value: Date | string) => value instanceof Date ? value.toLocaleDateString() : value
    },
    {
        header: "계약상태",
        accessor: 'state' as const,
        render: (value: boolean) => getPlaceStateText(value as boolean)
    },
];


const PlaceTable = ({ placedata }: { placedata: PlaceTableProps[] }) => {
    const [checkItems, setCheckItems] = useState<PlaceTableProps[]>([]);

    //row 체크 함수
    const handleRowCheck = (row: PlaceTableProps) => {
        if (checkItems.find(item => item.id == row.id) != undefined) {
            setCheckItems(checkItems.filter(item => item !== row))
        } else {
            setCheckItems(prev => {
                return [...prev, row];
            });
        }

    }

    return (
        <Table data={placedata}>
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
                <Columns
                    columns={colums}
                    onRowClick={handleRowCheck}
                    checkItems={checkItems}
                />
            </Body>
        </Table>
    )
}


export default PlaceTable;