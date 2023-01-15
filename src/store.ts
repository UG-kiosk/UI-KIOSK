import { configureStore } from '@reduxjs/toolkit';
import { isWelcomedReducer, WelcomeType } from './state/WelcomeSlice';
import { workersReducer, Worker } from './state/WorkersSlice';

export const store = configureStore({
  reducer: {
    isWelcomed: isWelcomedReducer,
    workers: workersReducer,
  },
});

export interface StateType {
  isWelcomed: WelcomeType;
  workers: Worker[];
}
