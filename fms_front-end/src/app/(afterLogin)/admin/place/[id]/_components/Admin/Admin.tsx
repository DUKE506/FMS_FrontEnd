'use client'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import { AppDispatch, RootState } from "@/lib/store";
import { ListAdminProps } from "@/types/administrator/adminstrator";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ManagerTable } from "../../../add/_components/ManagerTable/ManagerTable";
import { addPlaceAdminAction, deletePlaceAdminAction, getPlaceAdminAction } from "@/lib/features/place/placeActions";
import LucideIcon from "@/app/(afterLogin)/_components/LucideIcon/LucideIcon";
import { BackGround } from "@/app/(afterLogin)/_components/InputModal/InputModal";
import { Modal } from "@/app/(afterLogin)/_components/Modal/Modal";
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input";
import { MemberList } from "@/app/(afterLogin)/admin/administrator/_components/Member/Member";
import styles from './Admin.module.css'
import { getAllAdminList } from "@/lib/features/administrator/adminAction";


const Admin = ({placeid} : {placeid:number}) => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    //전체 관리자 조회
    const [adminList, setAdminList] = useState<ListAdminProps[]>([]);
    
    const [placeAdmin, setPlaceAdmin] = useState<ListAdminProps[]>([]);
    //모달에서 선택한 관리자
    const [modalCheckAdmin, setModalCheckAdmin] = useState<ListAdminProps[]>([]);
    //테이블에서 선택한 관리자
    const [tableCheckedAdmin, setTableCheckedAdmin] = useState<ListAdminProps[]>([]);
    //검색어
    const [search, setSearch] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const placeAdmins = useSelector((state:RootState)=> state.placeAdmin)

    useEffect(() => {
            const reqData = async () => {
                //관리자 전체 조회
                const allAdmin = await dispatch(getAllAdminList()).unwrap()
                setAdminList(allAdmin);
            }
            reqData();
        }, [])

    useEffect(()=>{
        dispatch(getPlaceAdminAction(placeid))
        const convert = placeAdmins.data.map(admin => ({
            id : admin.placeAdminId,
            account : admin.account || '',
            name: admin.name,
            email: admin.email,
            phone: admin.phone,
            job: admin.job,
            group: admin.group,
            state : null,
        }))
        setPlaceAdmin(convert)
        
    },[placeAdmins.data])

    

    //모달 관리자 추가
    const handleAddModal = () => {
        //추가할 관리자
        dispatch(addPlaceAdminAction({placeId:placeid, admins:modalCheckAdmin}))
        setModalCheckAdmin([])
        setModalActive(false);
    }

    //모달 취소
    const handleCancel = () => {
        setModalCheckAdmin([]);
        setModalActive(false);
    }

    //검색어 입력
    const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setSearch(value)
    }
    

    //추가한 관리자 삭제
    const handleDeleteAdmin = () => {
        dispatch(deletePlaceAdminAction({placeId:placeid,placeAdmin:tableCheckedAdmin}))
        setTableCheckedAdmin([])
    }

    return(
        <>
        <BaseContainer
        header={
            <BaseHeader title="관리자">
                <LucideIcon name="Plus" onClick={()=>setModalActive(true)}/>
                {
                    tableCheckedAdmin.length > 0 && (
                        <LucideIcon name="Trash2" color='delete' onClick={handleDeleteAdmin}/>
                    )
                }
            </BaseHeader>
        }
        >
            <ManagerTable members={placeAdmin} checkedAdmin={tableCheckedAdmin} onChecked={setTableCheckedAdmin}/>
        </BaseContainer>
        {
            modalActive ?
                <BackGround>
                    <Modal
                        title="관리자 추가"
                        onSave={handleAddModal}
                        onCancel={handleCancel}>
                        <ColInput
                            input={{
                                type: 'text',
                                placeholder: '이름, 부서, 아이디를 입력해주세요.',
                                value:search,
                                onChange:handleSearch
                            }}
                            edit
                        />
                        <div className={`${styles.list_wrap}`}>
                            <MemberList
                                members={adminList.filter(all => 
                                    !placeAdmins.data.some(selectUser => selectUser.id === all.id)
                                    && (all.name.includes(search)
                                )
                                )}
                                onCheck={setModalCheckAdmin}
                                edit />
                        </div>
                    </Modal>
                </BackGround>
                :
                null
            }
        </>
        
    )
}


export default Admin;