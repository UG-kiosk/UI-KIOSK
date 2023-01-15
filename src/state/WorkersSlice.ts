import { createSlice } from '@reduxjs/toolkit';

export interface WorkerContent {
  email: string;
  posts: string[];
  tutorship: {
    schedule: string;
    link: string;
  };
}

export interface Worker {
  id: string;
  name: string;
  link: string;
  units: string[];
  content: WorkerContent;
}

export const workersSlice = createSlice({
  name: 'workers',
  initialState: [] as Worker[],
  reducers: {},
});

export const {} = workersSlice.actions;

export const workersReducer = workersSlice.reducer;
