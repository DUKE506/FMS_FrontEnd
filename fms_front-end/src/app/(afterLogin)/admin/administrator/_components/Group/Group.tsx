'use client'
import OptionIcon from '../../../../../../../public/images/three-dots-vertical.svg'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Style from './Group.module.css'
import { useState } from "react"
import { OptionButton } from '@/app/(afterLogin)/_components/OptionButtons/OptionButton'
import { BackGround, InputModal } from '@/app/(afterLogin)/_components/InputModal/InputModal'


export interface GroupProps {
    id: number,
    title: string,
}



export const GroupContainer = ({ groups }: { groups: GroupProps[] }) => {
    const [active, setActive] = useState<number>(0);
    const [add, setAdd] = useState<boolean>(false);

    const handleChangeActive = (id: number) => {
        setActive(id === active ? 0 : id);
    }

    const handleChangeAdd = () =>{
        setAdd(!add);
    }

    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="그룹">
                        <OptionButton
                        add={handleChangeAdd}
                        />
                    </BaseHeader>
                }
            >
                <ul className={Style.col}>
                    {
                        groups.map((group, idx) => {
                            return (
                                <Group
                                    key={group.title + idx}
                                    group={group}
                                    onChangeActive={handleChangeActive}
                                    activeid={active}
                                />
                            )
                        })
                    }
                </ul>
            </BaseContainer>
            {
                add ?
                <BackGround>
                    <InputModal 
                    title='그룹 추가' 
                    submitTitle='추가'
                    inputOption={{
                        type:'text',
                        placeholder:'그룹명을 입력해주세요.'
                    }}
                    />
                </BackGround>
                :
                null
            }
        </>
    )
}


const Group = ({ group, activeid, onChangeActive }: { group: GroupProps; activeid: number; onChangeActive: (id: number) => void }) => {
    return (
        <>
            <li
                className={`${Style.li_box} ${activeid == group.id ? Style.active : ''} `}
                onClick={() => onChangeActive(group.id)}
            >
                {group.title}
            </li>
        </>
    )
}