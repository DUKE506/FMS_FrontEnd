
import { FormContainer } from "./_components/Form/Form"
import { PlaceAddClient } from "./_components/PlaceAddClient"
import Styles from './page.module.css'



const PlaceAdd = () => {

    return (
        <div className={Styles.container}>
            <PlaceAddClient />
        </div>
    )
}

export default PlaceAdd