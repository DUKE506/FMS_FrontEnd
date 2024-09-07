
import { ReactNode } from 'react'
import styles from './Base.module.css'

interface BaseContainerProps {
    children : ReactNode
}

const BaseContainer = ({children} : BaseContainerProps) => {

    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default BaseContainer;