import { AdminDetailClient } from "./_components/AdminDetailClient";

interface AdminDetailProps {
    params: { id: number };
}

const AdminDetail = ({ params }: { params: AdminDetailProps }) => {
    return (
        <>
            <AdminDetailClient />
        </>
    )
}

export default AdminDetail