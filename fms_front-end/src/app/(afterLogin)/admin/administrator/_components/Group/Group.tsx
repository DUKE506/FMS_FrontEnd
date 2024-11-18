
import OptionIcon from '../../../../../../../public/images/three-dots-vertical.svg'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Style from './Group.module.css'
import { useState } from "react"
import { OptionButton } from '@/app/(afterLogin)/_components/OptionButtons/OptionButton'
import { BackGround, InputModal } from '@/app/(afterLogin)/_components/InputModal/InputModal'
import { createGroup } from '@/app/api/group/group'
import { CreateGroupDto, GroupDto } from '@/types/group/group'
import { useDispatch } from 'react-redux'
import { createGroupAction, getGroupAction } from '@/lib/features/group/groupAction'
import { AppDispatch } from '@/lib/store'


export const GroupContainer = ({ groups }: { groups: GroupDto[] }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [active, setActive] = useState<number>(0);
    //추가 모달 띄우기
    const [add, setAdd] = useState<boolean>(false);
    //수정 모드 변경
    const [update, setUpdate] = useState<boolean>(false);
    //수정 모드 시 수정모달 띄우기
    const [updateActive, setUpdateActive]= useState<boolean>(false);
    const [del, setDel] = useState<boolean>(false);
    //생성 그룹 state
    const [newGroup, setNewGroup] = useState<string>('');
    //수정 그룹 state
    const [updateGroup, setUpdateGroup] = useState<string>('');

    const handleChangeActive = (id: number) => {
        setActive(id === active ? 0 : id);
    }

    //그룹 수정 모드 변경
    // const handleUpdate = () =>{
    //     setUpdate(!update);
    // }
    //그룹 수정 모달 활성화
    const handleActiveUpdate = (id:number) => {
        if(!update){
            return
        }
        setUpdateActive(!updateActive);
        setUpdateGroup(groups.find(g => g.id == id)?.name ?? '')
    }

    //그룹 삭제 모드 변경
    const handleChangeDel = () =>{
        setDel(!del);
    }



    //그룹 추가 submit
    const handleSubmit = async () => {
        if(!newGroup){
            alert('그룹명을 입력해주세요');
            return;
        }
        const group:CreateGroupDto = {name:newGroup}
        await dispatch(createGroupAction(group));
        handleCreate();
    }

    //그룹 수정 update
    const handleUpdate = async () => {
        console.log('수정' + updateGroup)
    }

    const handleCreate = () => {
        setAdd(!add);
    }


    const handleEdit = () => {
        setUpdate(!update);
    }

    const handleDelete = () => {

    }

    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="그룹">
                        <OptionButton
                        options={['create', 'edit', 'delete']}
                        onAction={{
                            create: () => handleCreate(),
                            edit: () => handleEdit(),
                            delete: () => handleDelete()
                        }}
                        />
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
                                    update={update}
                                    setUpdate={handleActiveUpdate}
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
                    submit={handleSubmit}
                    close={handleCreate}
                    />
                </BackGround>
                :
                null
            }
            {
                updateActive ?
                <BackGround>
                    <InputModal 
                    title='그룹 수정' 
                    submitTitle='수정'
                    value={updateGroup}
                    onChange={setUpdateGroup}
                    inputOption={{
                        type:'text',
                        placeholder:'그룹명을 입력해주세요.',
                        name:'name',
                    }}
                    submit={handleUpdate}
                    close={()=>setUpdateActive(!updateActive)}
                    />
                </BackGround>
                :
                null
            }
        </>
    )
}


const Group = ({ 
    group, activeid, onChangeActive, update, setUpdate 
}: { group: GroupDto; activeid: number; 
    onChangeActive: (id: number) => void; update:boolean;
    setUpdate:(id:number)=>void;
    }) => {

    // 클릭 시 모달 창 띄우기
    const handleUpdateGroup = (id : number) =>{
        onChangeActive(id);
        if(update){
            setUpdate(id);
        }
    }

    return (
        <>
            <li
                className={`${Style.li_box} ${activeid == group.id ? Style.active : ''} `}
                onClick={() => handleUpdateGroup(group.id)}
            >
                {group.name}
            </li>
        </>
    )
}