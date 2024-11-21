import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Member.module.css'
import Link from "next/link";
import { IconBtn } from "@/components/IconBtn/IconBtn";
import { ListAdminProps } from "@/types/administrator/adminstrator";
import Add from '../../../../../../../public/images/plus-lg.svg'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { clickUser } from "@/lib/features/administrator/adminClickAdminSlice";

export const MemberContainer = ({ members }: { members: ListAdminProps[] }) => {
    return (
        <>
            <BaseContainer
                header={<BaseHeader title="관리자">
                    <Link href='/admin/administrator/add'>
                        <Add
                        style={{ fill: '#606060', width: 'var(--size-icon)', height: 'var(--size-icon)' }}
                        />
                    </Link>
                </BaseHeader>}
            >
                <ul className={Styles.col}>
                    {
                        members.map((member, idx) => {
                            return (
                                <Member
                                    key={member.name + idx}
                                    member={member}
                                />
                            )
                        })
                    }
                </ul>
            </BaseContainer>
        </>
    )
}

const Member = ({ member }: { member: ListAdminProps }) => {
    const dispatch = useDispatch<AppDispatch>();

    //관리자 클릭, ui프로필 들고오기 위함
    const handleClickUser = () => {
        dispatch(clickUser(member.id))
    }
    return (
        <>
            
                <li className={Styles.row} onClick={handleClickUser}>
                    <div className={Styles.img}></div>
                    <div className={`${Styles.between}`}>
                        <span className={Styles.text}>
                            <Link href={`/admin/administrator/${member.id}`}>
                                {member.name}
                            </Link>
                        </span>
                        <span className={Styles.subtext}>
                            부서
                        </span>
                    </div>

                </li>
            
        </>
    )
}


