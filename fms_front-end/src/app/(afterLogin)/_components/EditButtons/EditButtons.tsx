// import Edit from '../../../../../public/images/pencil-square.svg'
// import Cancel from '../../../../../public/images/x-lg.svg'

// //수정해야함
// import Save from '../../../../../public/images/check-lg.svg'
import Styles from './EditButton.module.css'
import LucideIcon from '../LucideIcon/LucideIcon';


interface EditButtonProps {
    edit: boolean;
    onCancel: () => void;
    onEdit: () => void;
    onUpdate: () => void;
}

export const EditButtons = ({ edit, onCancel, onEdit, onUpdate }: EditButtonProps) => {
    return (
        <div className={Styles.editbtn}>
            {
                edit
                    ?
                    <div className={Styles.row}>
                        <LucideIcon name='Save'onClick={onUpdate}/>
                        <LucideIcon name='X' onClick={onCancel} color='delete'/>
                    </div>
                    :
                    <LucideIcon name="SquarePen" onClick={onEdit} />
            }
        </div>
    )
}
