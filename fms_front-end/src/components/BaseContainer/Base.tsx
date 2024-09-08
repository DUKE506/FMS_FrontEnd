
import { ReactNode } from 'react'
import styles from './Base.module.css'

interface BaseContainerProps {
    children: ReactNode;
    header?: ReactNode;
}

interface HeaderProps {
    title?: string;
    children?: ReactNode;
}

export const BaseContainer = ({ children, header }: BaseContainerProps) => {

    return (
        <div className={styles.container}>
            {header}
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export const BaseHeader = ({ title, children }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.opt_section}>
                {children}
            </div>
        </div>
    )
}