'use client'

import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Style from './Group.module.css'
import { useState } from "react"


export interface GroupProps {
    id: number,
    title: string,
}



export const GroupContainer = ({ groups }: { groups: GroupProps[] }) => {
    const [active, setActive] = useState<number>(0);

    const handleChangeActive = (id: number) => {
        setActive(id === active ? 0 : id);
    }

    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="그룹" />
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