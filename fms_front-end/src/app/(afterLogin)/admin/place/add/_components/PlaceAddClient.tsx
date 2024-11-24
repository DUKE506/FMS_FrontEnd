'use client'

import { useDispatch, useSelector } from "react-redux"
import { FormContainer } from "./Form/Form"
import { AppDispatch, RootState } from "@/lib/store"
import { submitPlace } from "@/lib/features/place/placeActions"
import { resetForm } from "@/lib/features/place/placeSlice"
import Button from "@/components/Button/Button"
import Styles from './PlaceAddClient.module.css'
import Perm from "../../_components/Perm/Perm"
import { useEffect, useState } from "react"
import Link from "next/link"
import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import { ManagerTable } from "./ManagerTable/ManagerTable"
import LucideIcon from "@/app/(afterLogin)/_components/LucideIcon/LucideIcon"
import { BackGround } from "@/app/(afterLogin)/_components/InputModal/InputModal"
import { Modal } from "@/app/(afterLogin)/_components/Modal/Modal"
import { ColInput } from "@/app/(afterLogin)/_components/Input/Input"
import { MemberList } from "../../../administrator/_components/Member/Member"
import { ListAdminProps } from "@/types/administrator/adminstrator"
import { getAllAdminList } from "@/lib/features/administrator/adminAction"


export const PlaceAddClient = () => {
    const [addModal, setAddModal] = useState<boolean>(false);
    const [adminList, setAdminList] = useState<ListAdminProps[]>([]);
    const dispatch = useDispatch<AppDispatch>()
    const place = useSelector((state: RootState) => state.place)


    useEffect(() => {
        return () => {
            dispatch(resetForm())
        }
    }, [dispatch])


    useEffect(() => {
        const reqData = async () => {
            //관리자 전체 조회
            const allAdmin = await dispatch(getAllAdminList()).unwrap()
            setAdminList(allAdmin);
        }
        reqData();
    }, [])


    //사업장 추가
    const submit = async () => {
        await dispatch(submitPlace(place))
        dispatch(resetForm())
    }

    //관리자 추가 모달 활성화
    const handleAddModal = () => {

    }

    return (
        <>
            <FormContainer />
            <Perm place={place} edit={true} mode="create" />
            <BaseContainer
                header={
                    <BaseHeader title="관리자">
                        <LucideIcon
                            name='Plus'
                            onClick={() => setAddModal(true)}
                        />
                    </BaseHeader>
                }
            >
                <ManagerTable />
            </BaseContainer>
            <div className={Styles.flex_left}>
                <Link href={"/admin/place"}>
                    <Button label="버튼" onClick={submit} />
                </Link>
            </div>

            {
                addModal ?
                    <BackGround>
                        <Modal title="관리자 추가" onCancel={() => setAddModal(false)}>
                            <ColInput
                                input={{
                                    type: 'text',
                                    placeholder: '이름, 부서, 아이디를 입력해주세요.'
                                }}
                                edit
                            />
                            <MemberList members={adminList} />
                        </Modal>
                    </BackGround>
                    :
                    null
            }
        </>

    )
}