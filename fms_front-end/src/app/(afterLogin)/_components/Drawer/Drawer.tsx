"use client"
import CardContainer from "@/components/Card/Card";
import styles from './Drawer.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation";

interface DrawerGroupProps{
    title : string;
    icon? : string;
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
    
    const OnMove = () => {
        if(url){
            router.push(url)
        }
    }
    return(
        <div className={styles.group}>
            <div className={styles.tab} onClick={OnMove}>
                <span>
                    아이콘
                </span>
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
                                title="사업장 관리" 
                                url="/place"
                            />
                            <DrawerGroup 
                                title="매니저 관리"
                                url="/manager"
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
                                    url="/electornic"
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