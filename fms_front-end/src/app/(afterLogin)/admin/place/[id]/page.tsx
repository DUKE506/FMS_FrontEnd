import Button from "@/components/Button/Button";
import PlaceDetailClient from "./_components/PlaceDetailClient";
import Styles from './page.module.css'

interface PlaceDetailProps {
    params: { id: number };
}

const PlaceDetail = ({ params }: PlaceDetailProps) => {
    return (
        <div className={Styles.container}>
            <PlaceDetailClient placeid={params.id} />
        </div>
    )
}

export default PlaceDetail;