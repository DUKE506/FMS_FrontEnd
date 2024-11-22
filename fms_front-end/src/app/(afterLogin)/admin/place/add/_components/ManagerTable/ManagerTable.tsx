import { Body, Header,HeaderCell, HeaderRow,Table } from "@/app/(afterLogin)/_components/Table/Table"


const columns = [
    { header: "이름", accessor: 'name' as const },
    { header: "그룹", accessor: 'group' as const },
    { header: "이메일", accessor: 'email' as const },
    { header: "전화번호", accessor: 'phone' as const },
    { header: "권한", accessor: 'job' as const },
    { header: "재직", accessor: 'name' as const },
    
]

export const ManagerTable = () => {
    return(
        <>
        </>
        // <Table data={}>
        //     <Header>
        //         <HeaderRow>
        //             {
        //                 columns.map((header,idx)=>{
        //                     return(
        //                         <HeaderCell key={idx}>
        //                             {header.header}
        //                         </HeaderCell>
        //                     )
                            
        //                 })
        //             }
        //         </HeaderRow>
        //     </Header>
        // </Table>
    )
}