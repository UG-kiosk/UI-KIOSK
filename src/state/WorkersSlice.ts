import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Worker } from '@UG/libs/types';

export interface WorkerType {
  isLoading: boolean;
  workersList: Worker[];
  error: string | null;
}

const initialState: WorkerType = {
  isLoading: false,
  workersList: [],
  error: null,
};

export const workersSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {
    startLoading(state: WorkerType) {
      state.isLoading = true;
      state.error = null;
    },
    setWorkersList(state: WorkerType, action: PayloadAction<Worker[]>) {
      state.workersList = action.payload;
      state.error = null;
    },
    finishLoading(state: WorkerType) {
      state.isLoading = false;
    },
    setError(state: WorkerType, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { startLoading, setWorkersList, finishLoading, setError } = workersSlice.actions;

export const workersReducer = workersSlice.reducer;
