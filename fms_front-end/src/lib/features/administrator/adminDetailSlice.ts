import { findOneAdmin } from "@/app/api/administrator/administrator";
import { Admin, AdminPlaceList } from "@/types/administrator/adminstrator";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAdminDetail, patchAdmin } from "./adminAction";



interface adminDetailProps {
    data: Admin;
    loading: boolean;
    error: string | null;
}

const initialState: adminDetailProps = {
    data: {} as Admin,
    loading: false,
    error: null,
}



const AdminDetailSlice = createSlice({
    name: 'adminInfo',
    initialState,
    reducers: {
        updateAdmin: (state, action: PayloadAction<{ name: string, value: string }>) => {
            const { name, value } = action.payload;
            state.data = {
                ...state.data,
                [name]: value
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdminDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAdminDetail.fulfilled, (state, action) => {
                state.data = action.payload as Admin;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAdminDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(patchAdmin.fulfilled, (state, action) => {

            })
    }
})

export const { updateAdmin } = AdminDetailSlice.actions;
export default AdminDetailSlice.reducer;