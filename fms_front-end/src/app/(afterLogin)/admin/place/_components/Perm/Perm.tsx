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
import { ReactElement, useEffect } from "react"
import { placeInfoProps, updatePlaceDetail } from "@/lib/features/place/placeDetailSlice"
import { updateField } from "@/lib/features/place/placeSlice"
import { CreatePlaceProps, DetailPlaceProps } from "@/types/place/place.type"
import { EditButtons } from "@/app/(afterLogin)/_components/EditButtons/EditButtons"
import { AppDispatch, RootState } from "@/lib/store"
import { getDetailPlacePermAction } from "@/lib/features/place/placeActions"

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
    const dispatch = useDispatch<AppDispatch>();
    const placePerm = useSelector((state:RootState) => state.placeDetail2.permData)

    //사업장 권한 데이터 조회
    useEffect(() => {
        dispatch(getDetailPlacePermAction(placeid))
    }, [dispatch])

    //input 입력 핸들러
    const handleInputChange = (name: string, value: boolean) => {
        if(edit === true){
            mode === 'create' ?
            dispatch(updateField({name,value})) :
            dispatch(updatePlaceDetail({ name, value }))
        }
        
    }

    const toggleData: ToggleData[] = [
        {
            icon: <Machine />,
            title: '기계',
            name: 'machinePerm',
            value: placePerm.machinePerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Electric />,
            title: '전기',
            name: 'electricPerm',
            value: placePerm?.electricPerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Lift />,
            title: '승강',
            name: 'liftPerm',
            value: placePerm.liftPerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Fire />,
            title: '소방',
            name: 'firePerm',
            value: placePerm.firePerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Building />,
            title: '건축',
            name: 'constructPerm',
            value: placePerm.constructPerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Network />,
            title: '통신',
            name: 'networkPerm',
            value: placePerm.networkPerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Beauty />,
            title: '미화',
            name: 'beautyPerm',
            value: placePerm.beautyPerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Security />,
            title: '보안',
            name: 'securityPerm',
            value: placePerm.securityPerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Energy />,
            title: '에너지',
            name: 'energyPerm',
            value: placePerm.energyPerm ?? false,
            onChange: (name, value) => handleInputChange(name, value)
        },
        {
            icon: <Voc />,
            title: '민원',
            name: 'vocPerm',
            value: placePerm.vocPerm ?? false,
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
                            edit={false}
                            onCancel={()=>{}}
                            onEdit={()=>{}}
                            onUpdate={()=>{}}
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