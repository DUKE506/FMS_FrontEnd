import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import { Admin } from "@/types/administrator/adminstrator"
import styles from './Profile.module.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/lib/store"
import { getAdminDetail } from "@/lib/features/administrator/adminAction"

export const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {data} = useSelector((state:RootState)=>state.adminDetail)
    const {user} = useSelector((state:RootState) => state.clickAdmin)
    const authUser = useSelector((state:RootState) => state.authUser)
    const infoProps: InfoProps[] = [
        {
            title: '그룹',
            value: data?.group?.name ?? ''
        },
        {
            title: '담당 사업장',
            value: data?.adminplaces?.length.toString() ?? ''
        }
    ]

    useEffect(()=>{
        console.log(authUser.user?.account)
        if(user){
            dispatch(getAdminDetail(user));
        }else{
            dispatch(getAdminDetail(authUser.user?.id ?? 0));
        }
        
    },[user])
    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="프로필" />
                }
            >
                <div className={styles.col}>
                    <div className={styles.img_wrap}>
                        <div className={styles.img}>
                        </div>
                        <span className={styles.name}>
                            {data.name}
                        </span>
                    </div>

                    <Info datas={infoProps} />
                    <div className={styles.sub_info}>
                        <Text title="전화번호" value={data.phone} />
                        <Text title="이메일" value={data.email} />
                        <Text title="권한" value={data.job} />
                        <Text title="상태" value="재직" />
                    </div>

                </div>
            </BaseContainer>
        </>
    )
}

export const ProfileBody = ({ data }: { data?: Admin }) => {
    const infoProps: InfoProps[] = [
        {
            title: '그룹',
            value: data?.group?.name ?? ''
        },
        {
            title: '담당 사업장',
            value: data?.adminplaces?.length.toString() ?? ''
        }
    ]
    return (
        <div className={styles.col}>
            <div className={styles.img_wrap}>
                <div className={styles.img}>
                </div>
                <span className={styles.name}>
                    {data?.name}
                </span>
            </div>

            <Info datas={infoProps} />
            <div className={styles.sub_info}>
                <Text title="전화번호" value={data?.phone ?? ''} />
                <Text title="이메일" value={data?.email ?? ''} />
                <Text title="권한" value={data?.job ?? ''} />
                <Text title="상태" value="재직" />
            </div>

        </div>

    )
}

interface InfoProps {
    title: string;
    value: string;
}


const Text = ({ title, value }: InfoProps) => {
    return (
        <div className={styles.text_col}>
            <span className={styles.text_title}>
                {title}
            </span>
            <span className={styles.text_value}>
                {value}
            </span>
        </div>
    )
}


const Info = ({ datas }: { datas: InfoProps[] }) => {
    return (
        <div className={styles.wrap}>
            {
                datas.map((value, idx) => {
                    return (
                        <div className={styles.info_col} key={idx}>
                            <span className={styles.info_title}>
                                {value.title}
                            </span>
                            <span className={styles.info_value}>
                                {value.value}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

