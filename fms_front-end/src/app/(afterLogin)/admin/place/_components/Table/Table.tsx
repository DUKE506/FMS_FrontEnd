

import styles from './Table.module.css'
import { Children, createContext, ReactNode, useContext } from 'react';

//테이블 데이터 타입 정의
type TableData = Record<string, any>


//context api 생성 및 tableData객체 배열을 저장하는 곳이며 초기값은 빈 배열
const TableContext = createContext<TableData[]>([]);

interface TableProps<T extends TableData> {
    data: T[];
    children: ReactNode;
}

interface ColumnProps<T extends TableData> {
    header: string;
    accessor: keyof T;
    render?: (value: any, item: T) => ReactNode;
}

export const Table = <T extends TableData>({ data, children }: TableProps<T>) => {
    return (
        <TableContext.Provider value={data}>
            <table className={styles.table}>
                {children}
            </table>
        </TableContext.Provider>
    )
}

export const Header = ({ children }: { children: ReactNode }) => {
    return (
        <thead className={styles.thead}>
            {children}
        </thead>
    )
}

export const HeaderRow = ({ children }: { children: ReactNode }) => {
    return (
        <tr className={styles.thead_tr}>
            {children}
        </tr>
    )
}

export const HeaderCell = ({ children }: { children: ReactNode }) => {
    return (
        <th className={styles.th}>
            {children}
        </th>
    )
}

export const Body = ({ children }: { children: ReactNode }) => {
    return (
        <tbody className={styles.tbody}>
            {children}
        </tbody>
    )
}

export const Row = ({ children }: { children: ReactNode }) => {
    return (
        <tr className={styles.tr}>
            {children}
        </tr>
    )
}

export const Cell = ({ children }: { children: ReactNode }) => {
    return (
        <td className={styles.td}>
            {children}
        </td>
    )
}

export const Columns = <T extends TableData>({columns} : {columns : ColumnProps<T>[]}) =>{
    const data = useContext(TableContext) as T[];

    return(
        <>
            {data.map((item, idx) => {
                return(
                    <Row key={idx}>
                    {columns.map((col, idx) => (
                        <Cell key={idx}>
                            {col.render
                                    ? col.render(item[col.accessor], item)
                                    : item[col.accessor]
                            }
                        </Cell>    
                    ))}
                </Row>    
                )
                
            })}
        </>
    )
}