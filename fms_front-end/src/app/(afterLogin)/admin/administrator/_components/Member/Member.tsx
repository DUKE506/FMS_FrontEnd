import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Styles from './Member.module.css'
import Link from "next/link";
import { IconBtn } from "@/components/IconBtn/IconBtn";
import { ListAdminProps } from "@/types/administrator/adminstrator";


export const MemberContainer = ({ members }: { members: ListAdminProps[] }) => {
    return (
        <>
            <BaseContainer
                header={<BaseHeader title="관리자">
                    <Link href='/admin/administrator/add'>
                        <IconBtn
                            title="Add"
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>}
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
    return (
        <>
            <Link href={`/admin/administrator/${member.id}`}>
                <li className={Styles.row}>

                    <div className={Styles.img}></div>
                    <div className={`${Styles.between}`}>
                        <span className={Styles.text}>
                            {member.name}
                        </span>
                        <span className={Styles.subtext}>
                            부서
                        </span>
                    </div>

                </li>
            </Link>
        </>
    )
}


