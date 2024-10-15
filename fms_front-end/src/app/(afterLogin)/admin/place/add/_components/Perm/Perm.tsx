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
import Toggle from "@/app/(afterLogin)/_components/Toggle/Toggle"
import Styles from './Perm.module.css'

const toggleData = [
    {
        icon: <Basic/>,
        title:'기본'
    },
    {
        icon: <Machine/>,
        title:'기계'
    },
    {
        icon: <Electric/>,
        title:'전기'
    },
    {
        icon: <Lift/>,
        title:'승강'
    },
    {
        icon: <Fire/>,
        title:'소방'
    },
    {
        icon: <Building/>,
        title:'건축'
    },
    {
        icon: <Network/>,
        title:'통신'
    },
    {
        icon: <Beauty/>,
        title:'미화'
    },
    {
        icon: <Securtiy/>,
        title:'보안'
    },
    {
        icon: <Energy/>,
        title:'에너지'
    },
    {
        icon: <User/>,
        title:'사용자'
    },
    {
        icon: <Voc/>,
        title:'민원'
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
            <div className={Styles.row}>
            {
                toggleData.map((value,idx)=>{
                    return(
                        <Toggle icon={value.icon} title={value.title}/>
                    )
                })
            }
            </div>
            
        </BaseContainer>
        </>
    )
}


export default Perm;