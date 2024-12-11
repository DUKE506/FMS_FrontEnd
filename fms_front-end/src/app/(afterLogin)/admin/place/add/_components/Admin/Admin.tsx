'use client'
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import { AppDispatch, RootState } from "@/lib/store";
import { ListAdminProps } from "@/types/administrator/adminstrator";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ManagerTable } from "../../../add/_components/ManagerTable/ManagerTable";
import LucideIcon from "@/app/(afterLogin)/_components/LucideIcon/LucideIcon";
import { BackGround } from "@/app/(afterLogin)/_components/InputModal/InputModal";
import { Modal } from "@/app/(afterLogin)/_components/Modal/Modal";
import { deleteAdmin, updateField } from "@/lib/features/place/placeSlice";
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input";
import { MemberList } from "@/app/(afterLogin)/admin/administrator/_components/Member/Member";
import styles from './Admin.module.css'
import { getAllAdminList } from "@/lib/features/administrator/adminAction";


const Admin = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [adminList, setAdminList] = useState<ListAdminProps[]>([]);
    //모달에서 선택한 관리자
    const [checkAdmin, setCheckAdmin] = useState<ListAdminProps[]>([]);
    //테이블에서 선택한 관리자
    const [tableCheckedAdmin, setTableCheckedAdmin] = useState<ListAdminProps[]>([]);

    const dispatch = useDispatch<AppDispatch>();
    const place = useSelector((state: RootState) => state.place)

    useEffect(() => {
        const reqData = async () => {
            //관리자 전체 조회
            const allAdmin = await dispatch(getAllAdminList()).unwrap()
            setAdminList(allAdmin);
        }
        reqData();
    }, [])


    //관리자 추가 모달 활성화
    const handleAddModal = () => {
        //추가할 관리자
        dispatch(updateField({ name: 'user', value: checkAdmin }))
        setModalActive(false);
    }

    //모달 취소
    const handleCancelModal = () => {
        setCheckAdmin([]);
        setModalActive(false);
    }

    //추가한 관리자 삭제
    const handleDeleteAdmin = () => {
        dispatch(deleteAdmin({value:tableCheckedAdmin}))
        setTableCheckedAdmin([])
    }
    
    return(
        <>
        <BaseContainer
        header={
            <BaseHeader title="관리자">
                <div className={styles.row}>
                    <LucideIcon 
                    name="Plus"
                    onClick={() => setModalActive(true)}
                    />
                    {
                        tableCheckedAdmin.length > 0 && (
                            <LucideIcon name="Trash2" color='delete' onClick={handleDeleteAdmin}/>
                        )
                    }
                </div>
                
            </BaseHeader>
        }
        >
            <ManagerTable members={place.user} checkedAdmin={tableCheckedAdmin} onChecked={setTableCheckedAdmin}/>
        </BaseContainer>
        {
                modalActive ?
                    <BackGround>
                        <Modal
                            title="관리자 추가"
                            onSave={handleAddModal}
                            onCancel={handleCancelModal}>
                            <ColInput
                                input={{
                                    type: 'text',
                                    placeholder: '이름, 부서, 아이디를 입력해주세요.'
                                }}
                                edit
                            />
                            <div className={`${styles.list_wrap}`}>
                                <MemberList
                                    members={adminList}
                                    onCheck={setCheckAdmin}
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