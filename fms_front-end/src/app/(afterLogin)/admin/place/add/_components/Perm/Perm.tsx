import { BaseContainer, BaseHeader } from "@/components/BaseContainer/Base"
import Beauty from '../../../../../../../../public/images/beauty.svg'
import Basic from '../../../../../../../../public/images/basic.svg'
import Building from '../../../../../../../../public/images/building.svg'
import Electric from '../../../../../../../../public/images/electric.svg'
import Lift from '../../../../../../../../public/images/elevator.svg'
import Fire from '../../../../../../../../public/images/fire.svg'
import Network from '../../../../../../../../public/images/network.svg'
import Securtiy from '../../../../../../../../public/images/security.svg'
import Energy from '../../../../../../../../public/images/energy.svg'
import User from '../../../../../../../../public/images/users.svg'
import Voc from '../../../../../../../../public/images/voc.svg'
import Machine from '../../../../../../../../public/images/machine.svg'
import {Toggle ,ToggleList} from "@/app/(afterLogin)/_components/Toggle/Toggle"
import Styles from './Perm.module.css'

const toggleData = [
    // {
    //     icon: <Basic/>,
    //     title:'기본',
    //     active:false
    // },
    {
        icon: <Machine/>,
        title:'기계',
        active:false
    },
    {
        icon: <Electric/>,
        title:'전기',
        active:false
    },
    {
        icon: <Lift/>,
        title:'승강',
        active:false
    },
    {
        icon: <Fire/>,
        title:'소방',
        active:false
    },
    {
        icon: <Building/>,
        title:'건축',
        active:false
    },
    {
        icon: <Network/>,
        title:'통신',
        active:false
    },
    {
        icon: <Beauty/>,
        title:'미화',
        active:false
    },
    {
        icon: <Securtiy/>,
        title:'보안',
        active:false
    },
    {
        icon: <Energy/>,
        title:'에너지',
        active:false
    },
    // {
    //     icon: <User/>,
    //     title:'사용자',
    //     active:false
    // },
    {
        icon: <Voc/>,
        title:'민원',
        active:false
    },
]


const Perm = () =>{
    return(
        <>
        <BaseContainer
        header={
            <BaseHeader title="사업장 권한"/>
        }
        >
            <ToggleList data={toggleData}/>
        </BaseContainer>
        </>
    )
}


export default Perm;