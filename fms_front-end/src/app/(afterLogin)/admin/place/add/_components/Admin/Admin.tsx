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
import { updateField } from "@/lib/features/place/placeSlice";
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input";
import { MemberList } from "@/app/(afterLogin)/admin/administrator/_components/Member/Member";
import styles from './Admin.module.css'
import { getAllAdminList } from "@/lib/features/administrator/adminAction";


const Admin = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [adminList, setAdminList] = useState<ListAdminProps[]>([]);
    const [checkAdmin, setCheckAdmin] = useState<ListAdminProps[]>([]);

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
    
    return(
        <>
        <BaseContainer
        header={
            <BaseHeader title="관리자">
                <LucideIcon 
                name="Plus"
                onClick={() => setModalActive(true)}
                />
            </BaseHeader>
        }
        >
            <ManagerTable members={place.user}/>
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