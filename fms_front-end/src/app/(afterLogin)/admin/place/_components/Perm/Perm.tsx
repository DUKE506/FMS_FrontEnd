import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Beauty from '../../../../../../../public/images/beauty.svg'
import Building from '../../../../../../../public/images/building.svg'
import Electric from '../../../../../../../public/images/electric.svg'
import Lift from '../../../../../../../public/images/elevator.svg'
import Fire from '../../../../../../../public/images/fire.svg'
import Network from '../../../../../../../public/images/network.svg'
import Security from '../../../../../../../public/images/security.svg'
import Energy from '../../../../../../../public/images/energy.svg'
import Voc from '../../../../../../../public/images/voc.svg'
import Machine from '../../../../../../../public/images/machine.svg'
import { ToggleList } from "@/app/(afterLogin)/_components/Toggle/Toggle"
import Styles from './Perm.module.css'
import { useDispatch, useSelector } from "react-redux"
import { ReactElement, useEffect, useState } from "react"
import { placeInfoProps, updatePlaceDetail } from "@/lib/features/place/placeDetailSlice"
import { updateField } from "@/lib/features/place/placeSlice"
import { CreatePlaceProps, DetailPlacePermProps, DetailPlaceProps } from "@/types/place/place.type"
import { EditButtons } from "@/app/(afterLogin)/_components/EditButtons/EditButtons"
import { AppDispatch, RootState } from "@/lib/store"
import { getDetailPlacePermAction, updatePlacePermAction } from "@/lib/features/place/placeActions"

interface ToggleData {
    icon: ReactElement;
    title: string;
    name: string;
    value: boolean;
    onChange: (name: string, value: boolean) => void;
}

interface PermProps {
    placeid: number
    place?: DetailPlaceProps | CreatePlaceProps;
    edit?: boolean;
    mode: 'create' | 'update';
}

const Perm = ({placeid, place, edit, mode}:PermProps) => {
    const [permEdit, setPermEdit] = useState<boolean>(false); // 수정 상태
    const [perm, setPerm] = useState<DetailPlacePermProps>({
        machinePerm: false,
        electricPerm: false,
        liftPerm: false,
        firePerm: false,
        constructPerm: false,
        networkPerm: false,
        beautyPerm: false,
        securityPerm: false,
        energyPerm: false,
        vocPerm: false,
    })
    const dispatch = useDispatch<AppDispatch>();
    const placePerm = useSelector((state:RootState) => state.placeDetail2.permData)
    
    //사업장 권한 데이터 조회
    useEffect(() => {
        dispatch(getDetailPlacePermAction(placeid))
    }, [dispatch])

    useEffect(()=>{
        if(mode === 'update'){
            setPerm(placePerm)
        }
    },[placePerm])

    //input 입력 핸들러
    const handleInputChange = (name: string, value: boolean) => {
        if(mode ==='create' && edit === true){
            dispatch(updateField({name,value}))
        }else if(mode ==='update' && permEdit){
            setPerm(prev => ({
                ...prev,
                [name] : value,
            }))
        }
        
    }

    //권한 수정 취소
    const handleCancel = () => {
        setPermEdit(false);
        setPerm(placePerm);
    }

    //권한 수정 저장
    const handleUpdate = () => {
        dispatch(updatePlacePermAction({
            placeid:placeid,
            placeperm : perm,
        }))
        setPermEdit(false);
    }

    const toggleData: ToggleData[] = [
        {
            icon: <Machine />,
            title: '기계',
            name: 'machinePerm',
            value:permEdit ? perm.machinePerm : placePerm.machinePerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Electric />,
            title: '전기',
            name: 'electricPerm',
            value: permEdit ? perm.electricPerm : placePerm?.electricPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Lift />,
            title: '승강',
            name: 'liftPerm',
            value: permEdit ? perm.liftPerm : placePerm.liftPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Fire />,
            title: '소방',
            name: 'firePerm',
            value: permEdit ? perm.firePerm : placePerm.firePerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Building />,
            title: '건축',
            name: 'constructPerm',
            value: permEdit ? perm.constructPerm : placePerm.constructPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Network />,
            title: '통신',
            name: 'networkPerm',
            value: permEdit ? perm.networkPerm : placePerm.networkPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Beauty />,
            title: '미화',
            name: 'beautyPerm',
            value: permEdit ? perm.beautyPerm : placePerm.beautyPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Security />,
            title: '보안',
            name: 'securityPerm',
            value: permEdit ? perm.securityPerm : placePerm.securityPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Energy />,
            title: '에너지',
            name: 'energyPerm',
            value: permEdit ? perm.energyPerm : placePerm.energyPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Voc />,
            title: '민원',
            name: 'vocPerm',
            value: permEdit ? perm.vocPerm : placePerm.vocPerm,
            onChange: (name, value) => handleInputChange(name, value)
        },
    ]

    return (
        <>
            <BaseContainer
                header={
                    <BaseHeader title="사업장 권한">
                        {
                            <EditButtons
                            edit={permEdit}
                            onCancel={handleCancel}
                            onEdit={()=>{setPermEdit(true)}}
                            onUpdate={handleUpdate}
                            />
                        }
                    </BaseHeader>
                }
            >
                <ToggleList data={toggleData} />
            </BaseContainer>
        </>
    )
}


export default Perm;