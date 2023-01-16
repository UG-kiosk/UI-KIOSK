import { configureStore } from '@reduxjs/toolkit';
import { isWelcomedReducer, WelcomeType } from './state/WelcomeSlice';
import { staffReducer, StaffType } from './state/StaffSlice';

export const store = configureStore({
  reducer: {
    isWelcomed: isWelcomedReducer,
    staff: staffReducer,
  },
});

export interface StateType {
  isWelcomed: WelcomeType;
  staff: StaffType;
}
