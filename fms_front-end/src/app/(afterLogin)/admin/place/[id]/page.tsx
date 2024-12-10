import Styles from './page.module.css'
import Admin from "./_components/Admin/Admin";
import Perm from "./_components/Perm/Perm";
import Form from "./_components/Form/Form";

interface PlaceDetailProps {
    params: { id: number };
}

const PlaceDetail = ({ params }: PlaceDetailProps) => {
    return (
        <div className={Styles.container}>
            <Form placeid={params.id} />
            <Perm placeid={params.id}/>
            <Admin placeid={params.id}/>
            {/* <PlaceDetailClient placeid={params.id} /> */}
        </div>
    )
}

export default PlaceDetail;