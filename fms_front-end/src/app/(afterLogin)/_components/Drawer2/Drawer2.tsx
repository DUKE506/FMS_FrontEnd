'use client'

import Styles from './Draer2.module.css'
import PlaceIcon from '../../../../../public/images/place.svg'
import AdminIcon from '../../../../../public/images/admin.svg'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Drawer2Props {
    title : string;
    icon?: React.ReactNode;
    url : string;
    sub? : Drawer2Props[];
}
const AdminDrawerMockup:Drawer2Props[] = [
    {
        title : '사업장',
        icon:<PlaceIcon width='1rem'/>,
        url : '/admin/place'
    },
    {
        title : '관리자',
        icon:<AdminIcon width='1rem'/>,
        url : '/admin/administrator'
    },
]

export const Drawer2 = ({adminMode} : {adminMode : boolean}) => {
    return(
        <div className={Styles.drawer}>
            {
                adminMode ?
                AdminDrawerMockup.map((item,idx) =>{
                    return(
                        <DrawerItem key={item.title+idx} data={item}/>
                    )
                })
                :
                null
            }
        </div>
    )
}



const DrawerItem = ({data} :{ data : Drawer2Props }) => {
    const path = usePathname();
    const [isCurPatch ,setIsCurPath] = useState(false);

    useEffect(()=>{
        if(path.includes(data.url)){
            setIsCurPath(true);
        }else{
            setIsCurPath(false);
        }
    },[path])

    return(
        <Link href={data.url}>
            <li className={`${Styles.li} ${isCurPatch ? Styles.active : ''}`} >
                    <div className={`${Styles.icon}`}>
                        {data.icon}
                    </div>
                    <span className={Styles.title}>
                        {data.title}
                    </span>
            </li>
        </Link>
    )
}