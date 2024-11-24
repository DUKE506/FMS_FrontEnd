import { Body, Header, HeaderCell, HeaderRow, Table } from "@/app/(afterLogin)/_components/Table/Table"
import { getAllAdminList } from "@/lib/features/administrator/adminAction"
import { getPlaceAdminAction } from "@/lib/features/place/placeActions"
import { AppDispatch } from "@/lib/store"
import { ListAdminProps } from "@/types/administrator/adminstrator"
import { PlaceAdminProps } from "@/types/place/place.type"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"


const columns = [
    { header: "이름", accessor: 'name' as const },
    { header: "그룹", accessor: 'group' as const },
    { header: "이메일", accessor: 'email' as const },
    { header: "전화번호", accessor: 'phone' as const },
    { header: "권한", accessor: 'job' as const },
    { header: "재직", accessor: 'state' as const },
]

export const ManagerTable = ({

}: {
    }) => {
    const dispatch = useDispatch<AppDispatch>()
    const [adminList, setAdminList] = useState<ListAdminProps[]>([]);
    const [placeAdmin, setPlaceAdmin] = useState<ListAdminProps[]>([]);

    useEffect(() => {
        const reqData = async () => {
            //관리자 전체 조회
            const allAdmin = await dispatch(getAllAdminList()).unwrap()
            setAdminList(allAdmin);
        }
        reqData();
    }, [])

    return (
        <Table data={placeAdmin}>
            <Header>
                <HeaderRow>
                    {
                        columns.map((header, idx) => {
                            return (
                                <HeaderCell key={idx}>
                                    {header.header}
                                </HeaderCell>
                            )

                        })
                    }
                </HeaderRow>
            </Header>
        </Table>
    )
}