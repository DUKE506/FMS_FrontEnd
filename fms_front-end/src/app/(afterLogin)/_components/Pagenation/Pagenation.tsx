import { ReactNode, useEffect, useState } from "react"
import LucideIcon from "../LucideIcon/LucideIcon";
import styles from './Pagenation.module.css'


interface PagenationProps {
    totalPage : number;
    curPage : number;
}

export const Pagenation = ({totalPage,curPage} : PagenationProps) => {
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(()=>{
        setTotalPages(totalPage);
        setCurrentPage(curPage)
    },[totalPage,curPage])

    const pages = () => {
        const renderUi:ReactNode[] = []
        for( let i = 1; i <= totalPages ; i++){
            renderUi.push(<li className={styles.box}>{i}</li>)
        }
        return renderUi;
    }

    

    return(
        <div className={styles.row}>
            <div>
                <LucideIcon name='ChevronLeft'/>
            </div>
            {pages()}
            <div>
                <LucideIcon name='ChevronRight'/>
            </div>
            
        </div>
    )
}