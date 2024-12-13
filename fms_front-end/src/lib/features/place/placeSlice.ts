import { CreatePlaceProps } from '@/types/place/place.type';
import { RootState } from '@/lib/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { submitPlace } from './placeActions';
import { Admin, ListAdminProps } from '@/types/administrator/adminstrator';

const initialState: CreatePlaceProps = {
  name: '',
  code: '',
  tel: '',
  addr: '',
  contractNum: '',
  contractedAt: null,
  note: '', // 삭제 예정
  machinePerm: false,
  electricPerm: false,
  liftPerm: false,
  firePerm: false,
  constructPerm: false,
  networkPerm: false,
  beautyPerm: false,
  securityPerm: false,
  energyPerm: false,
  vocPerm: false,
  user: [],
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ name: string; value: string | Date | boolean | ListAdminProps[] }>) => {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    addUser:(state,action: PayloadAction<{value: ListAdminProps[] }>) => {
      const {value} = action.payload;
      return{...state, user: [...state.user, ...value]}
    },
    deleteAdmin:(state,action: PayloadAction<{value: ListAdminProps[] }>) => {
      const {value} = action.payload;
      return{...state, user: state.user.filter(u => !value.some(deleteUser => deleteUser.id === u.id))};
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitPlace.pending, (state) => {
        //로딩
      })
      .addCase(submitPlace.fulfilled, (state, action) => {
        console.log(state)
      })
      .addCase(submitPlace.rejected, (state, action) => {
        console.log("실패")
      })
  }
})

export const { updateField,addUser, deleteAdmin,resetForm } = placeSlice.actions;
export default placeSlice.reducer;

