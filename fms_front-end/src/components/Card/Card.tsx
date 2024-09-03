
import { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardContainerProps {
    children : ReactNode
}

const CardContainer = ({children} : CardContainerProps) => {

    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default CardContainer;