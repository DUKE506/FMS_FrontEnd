import { DetailAdminProps } from "@/types/administrator/adminstrator";



interface adminDetailProps {
    data: DetailAdminProps
    loading: boolean;
    error: string | null;
}

const initialState: adminDetailProps = {
    data: {} as DetailAdminProps,
    loading: false,
    error: null,
}
