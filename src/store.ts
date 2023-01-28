import { configureStore } from '@reduxjs/toolkit';
import { majorsReducer, MajorsType } from './state/MajorsSlice';
import { isWelcomedReducer, WelcomeType } from './state/WelcomeSlice';

export const store = configureStore({
  reducer: {
    isWelcomed: isWelcomedReducer,
    majors: majorsReducer,
  },
});

export interface StateType {
  isWelcomed: WelcomeType;
  majors: MajorsType;
}
