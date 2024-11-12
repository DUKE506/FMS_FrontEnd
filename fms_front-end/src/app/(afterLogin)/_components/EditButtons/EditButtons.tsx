import Edit from '../../../../../public/images/pencil-square.svg'
import Cancel from '../../../../../public/images/x-lg.svg'

//수정해야함
import Save from '../../../../../public/images/check-lg.svg'
import Styles from './EditButton.module.css'


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
                        <UpdateBtn onClick={onUpdate} />
                        <CancelBtn onClick={onCancel} />
                    </div>


                    :
                    <EditBtn onClick={onEdit} />
            }
        </div>
    )
}


const EditBtn = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className={Styles.icon} onClick={onClick}>
            <Edit width='100%' height='100%' fill='#606060' />
        </div>
    )
}

const UpdateBtn = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className={Styles.icon} onClick={onClick}>
            <Save width='100%' height='100%' fill='#606060' />
        </div>
    )
}

const CancelBtn = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className={Styles.icon} onClick={onClick}>
            <Cancel width='100%' height='100%' fill='red' />
        </div>
    )
}