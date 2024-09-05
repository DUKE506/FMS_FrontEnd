
import Card from '@/components/Card/Card';
import styles from './Table.module.css'

interface TableContainerProps{
    title : string;
    children : React.ReactNode
}


const TableContainer = ({title, children} : TableContainerProps) =>{
    return(
        <Card>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>
                        {title}
                    </span>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </Card>
        
    )
}


const Table = () =>{
    return(
        <div>

        </div>
    )
}

export default TableContainer;