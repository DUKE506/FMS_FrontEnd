import { BaseContainer } from "@/components/BaseContainer/Base"
import { Admin } from "@/types/administrator/adminstrator"
import styles from './Profile.module.css'
const mockupUser:Admin = {
    id:1,
    account : 'alfmr506',
    password : '1234',
    name : '이동희',
    email : 'ehdgml506@naver.com',
    phone : '02-151-8139',
    job : 'Master'
}






export const  Profile = () => {
    const infoProps:InfoProps[]=[
        {
            title:'그룹',
            value:'시스템 개발파트'
        },
        {
            title:'담당 사업장',
            value:'7'
        }
    ]
    return(
        <>
            <BaseContainer>
            <div className={styles.col}>
                <div className={styles.img_wrap}>
                    <div className={styles.img}>
                    </div>
                    <span className={styles.name}>
                        {mockupUser.name}
                    </span>
                </div>
                
                <Info datas={infoProps}/>
                <div className={styles.sub_info}>
                    <Text title="연락처" value={mockupUser.phone}/>
                    <Text title="이메일" value={mockupUser.email}/>
                    <Text title="권한" value={mockupUser.job}/>
                    <Text title="상태" value="재직"/>
                </div>
                
            </div>
            </BaseContainer>
        </>
    )
}

interface InfoProps{
    title:string;
    value:string;
}


const Text = ({title, value}:InfoProps) => {
    return(
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


const Info = ({datas}:{datas:InfoProps[]}) => {
    return(
        <div className={styles.wrap}>
            {
                datas.map((value, idx)=> {
                    return(
                        <div className={styles.info_col} key={idx}>
                            <span className={styles.info_title}>
                                {value.title}
                            </span>
                            <span  className={styles.info_value}>
                                {value.value}
                            </span>
                        </div>
                    )
                })
            } 
        </div>
    )
}

