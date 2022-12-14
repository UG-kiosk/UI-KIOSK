import { configureStore } from '@reduxjs/toolkit';
import { isWelcomedReducer, WelcomeType } from './state/WelcomeSlice';

export const store = configureStore({
  reducer: {
    isWelcomed: isWelcomedReducer,
  },
});

export interface StateType {
  isWelcomed: WelcomeType;
}
