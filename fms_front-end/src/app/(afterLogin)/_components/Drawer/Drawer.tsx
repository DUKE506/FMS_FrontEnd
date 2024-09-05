"use client"
import CardContainer from "@/components/Card/Card";
import styles from './Drawer.module.css'
import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface DrawerGroupProps{
    title : string;
    icon? : React.ReactNode;
    url? : string;
    children?: React.ReactNode;
}

interface DrawerItemProps{
    title : string;
    url? : string;
    baseUrl? : string;
}

interface DrawerProps{
    loginType : boolean;
}

const PlaceIcon = () =>{
    return(
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#606060" width={20} height={20}  viewBox="0 0 384 512"><path d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z"/></svg>
    )
}

const ManagerIcon = () =>{
    return(
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#606060" width={20} height={20} viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
    )
}

export const DrawerItem = ({title, baseUrl, url} : DrawerItemProps) => {
    return(
        <Link href={`${baseUrl ?? ''}${url?? ''}`}>
            <span>
                {title}
            </span>
        </Link>
    )
}

export const DrawerGroup = ({title, icon, url, children} : DrawerGroupProps)=>{
    // 클릭 시 하위 요소 열림 
    const router = useRouter();
    const path = usePathname();
    const [curPage, setCurPage] = useState(false);

    useEffect(()=>{
        if(path === url){
            setCurPage(true);
        }else{
            setCurPage(false);
        }
    },[path])

    const OnMove = () => {
        if(url){
            router.push(url)
        }
    }
    return(
        <div className={`${styles.group} ` }>
            <div className={`${styles.tab} ${curPage ? styles.active : ''}`} onClick={OnMove}>
                {icon}
                <span className={styles.title}>
                    {title}
                </span>
            </div>
            {children}
        </div>
    )
}



const Drawer = ({loginType}:DrawerProps) => {
    return(
        <>
            <CardContainer>
                <div className={styles.drawer}>
                    {
                        loginType ?
                        <>
                        {/* 관리자모드 */}
                            <DrawerGroup 
                                icon={<PlaceIcon />}
                                title="사업장 관리" 
                                url="/admin/place"
                            />
                            <DrawerGroup 
                            icon={<ManagerIcon/>}
                                title="매니저 관리"
                                url="/admin/manager"
                            />
                        </>
                        :
                        <>
                            <DrawerGroup title="기본정보">
                                <DrawerItem 
                                    title="건물 관리" 
                                    baseUrl="/basic"
                                    url="/building"
                                    />
                                <DrawerItem 
                                    title="위치 관리"
                                    baseUrl="/basic"
                                    url="/location"
                                />
                                <DrawerItem 
                                    title="단위 관리"
                                    baseUrl="/basic"
                                    url="/unit"
                                />
                            </DrawerGroup>
                            <DrawerGroup title="설비">
                                <DrawerItem 
                                    title="기계"
                                    baseUrl="/facility"
                                    url="/machine"
                                />
                                <DrawerItem 
                                    title="전기"
                                    baseUrl="/facility"
                                    url="/electronic"
                                />
                                <DrawerItem 
                                    title="승강"
                                    baseUrl="/facility"
                                    url="/lift"
                                />
                                <DrawerItem 
                                    title="소방"
                                    baseUrl="/facility"
                                    url="/fire"
                                />
                                <DrawerItem 
                                    title="건물"
                                    baseUrl="/facility"
                                    url="/building"
                                />
                                <DrawerItem 
                                    title="통신"
                                    baseUrl="/facility"
                                    url="/network"
                                />
                                <DrawerItem 
                                    title="미화"
                                    baseUrl="/facility"
                                    url="/beauty"
                                />
                                <DrawerItem 
                                    title="보안"
                                    baseUrl="/facility"
                                    url="/security"
                                />
                            </DrawerGroup>
                            <DrawerGroup title="기본정보 관리">
                                <DrawerItem title="건물 관리"/>
                                <DrawerItem title="위치 관리"/>
                                <DrawerItem title="단위 관리"/>
                            </DrawerGroup>
                            <DrawerGroup title="기본정보 관리">
                                <DrawerItem title="건물 관리"/>
                                <DrawerItem title="위치 관리"/>
                                <DrawerItem title="단위 관리"/>
                            </DrawerGroup>
                            <DrawerGroup title="기본정보 관리">
                                <DrawerItem title="건물 관리"/>
                                <DrawerItem title="위치 관리"/>
                                <DrawerItem title="단위 관리"/>
                            </DrawerGroup>
                            <DrawerGroup title="기본정보 관리">
                                <DrawerItem title="건물 관리"/>
                                <DrawerItem title="위치 관리"/>
                                <DrawerItem title="단위 관리"/>
                            </DrawerGroup>
                            
                        </>
                    }
                    
                </div>
            </CardContainer>
        </>
    )
}

export default Drawer;