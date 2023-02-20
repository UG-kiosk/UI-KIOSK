import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Academic } from '@UG/libs/types';

export interface StaffType {
  isLoading: boolean;
  staffList: Academic[];
  staffDetails: Academic | null;
  error: string | null;
}

const initialState: StaffType = {
  isLoading: false,
  staffList: [],
  staffDetails: null,
  error: null,
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    startLoading(state: StaffType) {
      state.isLoading = true;
      state.error = null;
    },
    setStaffList(state: StaffType, action: PayloadAction<Academic[]>) {
      state.staffList = action.payload;
      state.error = null;
    },
    finishLoading(state: StaffType) {
      state.isLoading = false;
    },
    setError(state: StaffType, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setStaffDetails(state: StaffType, action: PayloadAction<Academic>) {
      state.staffDetails = action.payload;
    },
  },
});

export const { startLoading, setStaffList, finishLoading, setError, setStaffDetails } = staffSlice.actions;

export const staffReducer = staffSlice.reducer;
