import { CreatePlaceProps } from '@/types/place/place.type';
import { RootState } from '@/lib/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { submitPlace } from './placeActions';

const initialState: CreatePlaceProps = {
  name: '',
  code: '',
  tel: '',
  addr: '',
  contractNum: '',
  contractedAt: null,
  note: '',
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ name: string; value: string | Date }>) => {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
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

export const { updateField, resetForm } = placeSlice.actions;
export default placeSlice.reducer;

