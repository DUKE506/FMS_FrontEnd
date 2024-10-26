import { AdminDetailClient } from "./AdminDetailClient";

interface AdminDetailProps {
    params: { id: number };
}

const AdminDetail = ({ params }: AdminDetailProps ) => {
    return (
        <>
            <AdminDetailClient id={params.id}/>
        </>
    )
}

export default AdminDetail