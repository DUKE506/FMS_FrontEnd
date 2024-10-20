
import ManagerClient from './ManagerClient';
import Styles from './page.module.css'

const Manager = () =>{
    return(
        <div className={Styles.container}>
            <ManagerClient/>
        </div>
    )
}

export default Manager;