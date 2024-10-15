import Styles from './Toggle.module.css'

interface ToggleProps{
    icon : React.ReactNode;
    title : string;
}

const Toggle = ({icon, title} : ToggleProps) => {
    return(
        <div className={Styles.toggle}>
            <div className={Styles.wrap}>
                {icon}
                <span className={Styles.title}>{title}</span>
            </div>
            
        </div>
    )
}


export default Toggle;