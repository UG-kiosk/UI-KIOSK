import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Major } from '@UG/libs/types';

export interface MajorsType {
  isLoading: boolean;
  majorsList: Major[];
  majorDetails: Major | null;
  error: string | null;
}

const initialState: MajorsType = {
  isLoading: false,
  majorsList: [],
  majorDetails: null,
  error: null,
};

export const majors = createSlice({
  name: 'majors',
  initialState,
  reducers: {
    startLoading(state: MajorsType) {
      state.isLoading = true;
      state.error = null;
    },
    setMajorsList(state: MajorsType, action: PayloadAction<Major[]>) {
      state.majorsList = action.payload;
      state.error = null;
    },
    setMajorDetails(state: MajorsType, action: PayloadAction<Major>) {
      state.majorDetails = action.payload;
      state.error = null;
    },
    finishLoading(state: MajorsType) {
      state.isLoading = false;
    },
    setError(state: MajorsType, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { startLoading, setMajorsList, setMajorDetails, finishLoading, setError } = majors.actions;

export const majorsReducer = majors.reducer;
