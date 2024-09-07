
import Card from '@/components/Card/Card';
import styles from './Table.module.css'
import { Children, createContext, ReactNode } from 'react';

type TableData = Record<string, any>

const TableContext = createContext<TableData[]>([]);

interface TableProps<T extends TableData> {
    data: T[];
    children: ReactNode;
}

export const Table = <T extends TableData>({ data, children }: TableProps<T>) => {
    return (
        <TableContext.Provider value={data}>
            <table>
                {children}
            </table>
        </TableContext.Provider>
    )
}

export const Header = ({ children }: { children: ReactNode }) => {
    return (
        <thead>
            {children}
        </thead>
    )
}

export const HeaderRow = ({ children }: { children: ReactNode }) => {
    return (
        <tr>
            {children}
        </tr>
    )
}

export const HeaderCell = ({ children }: { children: ReactNode }) => {
    return (
        <th>
            {children}
        </th>
    )
}

export const Body = ({ children }: { children: ReactNode }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

export const Row = ({ children }: { children: ReactNode }) => {
    return (
        <tr>
            {children}
        </tr>
    )
}

export const Cell = ({ children }: { children: ReactNode }) => {
    return (
        <td>
            {children}
        </td>
    )
}