
import { ReactNode } from 'react'
import styles from './Base.module.css'

interface BaseContainerProps {
    children: ReactNode;
    header?: ReactNode;
    fit? : boolean,
}

interface HeaderProps {
    title?: string;
    children?: ReactNode;
}

export const BaseContainer = ({ children, header,fit }: BaseContainerProps) => {

    return (
        <div className={`${styles.container} ${fit ? styles.fit : null}`}>
            {header}
            <div className={`${styles.body} ${fit ? styles.fit : null}`}>
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