import CardContainer from "@/components/Card/Card";
import styles from './Drawer.module.css'
import Link from 'next/link'


interface DrawerItemProps{
    title : string;
    icon? : string;
    url? : string;
    baseUrl? : string;
    children?: React.ReactNode;
}

const Drawer = () => {
    return(
        <>
            <CardContainer>
                <div className={styles.drawer}>

                </div>
            </CardContainer>
        </>
    )
}

export default Drawer;


export const DrawerItem = ({title, icon, baseUrl, url, children} : DrawerItemProps) => {
    return(
        <div>
            <span>아이콘</span>
            
        </div>
    )
}