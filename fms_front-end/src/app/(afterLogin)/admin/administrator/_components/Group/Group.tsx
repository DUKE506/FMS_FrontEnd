
import OptionIcon from '../../../../../../../public/images/three-dots-vertical.svg'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Style from './Group.module.css'
import { useEffect, useState } from "react"
import { OptionButton } from '@/app/(afterLogin)/_components/OptionButtons/OptionButton'
import { BackGround, InputModal } from '@/app/(afterLogin)/_components/InputModal/InputModal'
import { createGroup } from '@/app/api/group/group'
import { CreateGroupDto, GroupDto } from '@/types/group/group'
import { useDispatch, useSelector } from 'react-redux'
import { createGroupAction, getGroupAction, updateGroupAction } from '@/lib/features/group/groupAction'
import { AppDispatch, RootState } from '@/lib/store'
import { updateGroupName } from '@/lib/features/group/groupSlice'
import { EditButtons } from '@/app/(afterLogin)/_components/EditButtons/EditButtons'
import LucideIcon from '@/app/(afterLogin)/_components/LucideIcon/LucideIcon'


export const GroupContainer = ({ groups }: { groups: GroupDto[] }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [edit,setEdit] = useState<boolean>(false);
    const [active, setActive] = useState<number>(0);
    // //추가 모달 띄우기
    const [add, setAdd] = useState<boolean>(false);
    //수정 모드 변경
    const [update, setUpdate] = useState<boolean>(false);
    // //생성 그룹 state
    const [newGroup, setNewGroup] = useState<string>('');
    // //수정 그룹 state
    const [updateGroup, setUpdateGroup] = useState<GroupDto>({
        id:0,
        name:'',
    });

    const handleChangeEditMode = () => {
        setEdit(!edit);
    }

    const handleChangeActive = (id: number) => {
        setActive(id === active ? 0 : id);
    }

    // 그룹 추가 함수
    const handleCreateGroup = () => {
        if(!newGroup){
            window.alert("그룹명을 입력해주세요.")
            return;
        }
        const createGroup:CreateGroupDto={
            name : newGroup
        };

        dispatch(createGroupAction(createGroup))
        setAdd(false);
        setNewGroup('');
    }

    // 그룹 수정 모달 활성화
    const handleUpdateGroup = (id:number) => {
        setUpdateGroup({id, name :groups.find(g => g.id ===id )?.name ?? ''})
        setUpdate(true);
    }

    // 그룹 수정 전송 함수
    const handleUpdateGroupSubmit = () => {
        if(!updateGroup){
            window.alert("그룹명을 입력해주세요.");
            return;
        }
        dispatch(updateGroupAction(updateGroup))
        setUpdate(false);
    }

    //그룹명 수정함수
    const handleChangeGroupName = (name: string) => {
        setUpdateGroup(prev=>({
            ...prev,
            name : name
        }))
    }
    

    // 그룹 삭제 함수
    const handelDeleteGroup = () => {

    }

    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="그룹">
                        <LucideIcon name='Plus' onClick={()=>setAdd(true)}/>
                    </BaseHeader>
                }
            >
                <ul className={Style.col}>
                    {
                        groups.map((group, idx) => {
                            return (
                                <Group
                                    key={group.name + idx}
                                    group={group}
                                    onChangeActive={handleChangeActive}
                                    activeid={active}
                                    update={(id)=>{
                                        handleUpdateGroup(id)
                                    }}
                                    del={handelDeleteGroup}
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
                    value={newGroup}
                    onChange={setNewGroup}
                    inputOption={{
                        type:'text',
                        placeholder:'그룹명을 입력해주세요.'
                    }}
                    submit={handleCreateGroup}
                    close={()=>setAdd(false)}
                    />
                </BackGround>
                :
                null
            }
            {
                update ?
                <BackGround>
                    <InputModal 
                    title='그룹 수정' 
                    submitTitle='수정'
                    value={updateGroup.name ?? ''}
                    onChange={handleChangeGroupName}
                    inputOption={{
                        type:'text',
                        placeholder:'그룹명을 입력해주세요.',
                        name:'name',
                    }}
                    submit={handleUpdateGroupSubmit}
                    close={()=>setUpdate(false)}
                    />
                </BackGround>
                :
                null
            }
        </>
    )
}


const Group = ({ 
    group, activeid, onChangeActive,update,del
}: { group: GroupDto; activeid: number; 
    onChangeActive: (id: number) => void;
    update:(id:number)=>void; del:(id:number)=>void;
    }) => {


    return (
        <>
            <li
                className={`${Style.li_box} ${activeid == group.id ? Style.active : ''} `}
            >
                <span className={Style.text}>
                    {group.name}
                </span>
                <div className={`${Style.option} ${Style.row}`}>
                    <LucideIcon name='SquarePen'onClick={()=>update(group.id)}/>
                    <LucideIcon name='Trash2' color='delete' onClick={()=>del(group.id)}/>
                </div>
            </li>
        </>
    )
}