import { Body, Columns, Header, HeaderCell, HeaderRow, Table } from "@/app/(afterLogin)/_components/Table/Table"
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

interface ManagerTableProps {
    members: ListAdminProps[];
    checkedAdmin : ListAdminProps[];
    onChecked : React.Dispatch<React.SetStateAction<ListAdminProps[]>>;
}

export const ManagerTable = ({
    members,
    checkedAdmin,
    onChecked,
}: ManagerTableProps
) => {
    const dispatch = useDispatch<AppDispatch>()
    const [adminList, setAdminList] = useState<ListAdminProps[]>([]);
    // //체크된 항목
    // const [checkedAdmin, setCheckAdmin] = useState<ListAdminProps[]>([]);

    useEffect(() => {
        const reqData = async () => {
            //관리자 전체 조회
            const allAdmin = await dispatch(getAllAdminList()).unwrap()
            setAdminList(allAdmin);
        }
        reqData();
    }, [])

    //전체 선택
    const handleAllSelect = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChecked(e.target.checked ? members : [])
    }

    // useEffect(() => {
    // }, [members])

    return (
        <Table data={members} selectOption={true}>
            <Header>
                <HeaderRow>
                    {
                        <HeaderCell key={'allCheck'} className="min_width">
                            <input type="checkbox" checked={checkedAdmin.length > 0 && members.length === checkedAdmin.length} onChange={(e)=>{handleAllSelect(e)}}/>
                        </HeaderCell>
                    }
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
            <Body>
                <Columns
                    columns={columns}
                    onRowClick={() => { }}
                    checkItems={checkedAdmin}
                    onChecked={onChecked}
                />
            </Body>
        </Table>
    )
}