import { createSlice } from '@reduxjs/toolkit';

export interface WelcomeType {
  isWelcomed: boolean;
}

const initialState: WelcomeType = {
  isWelcomed: false,
};

export const isWelcomed = createSlice({
  name: 'isWelcomed',
  initialState,
  reducers: {
    MainView(state: WelcomeType) {
      state.isWelcomed = true;
    },
  },
});

export const { MainView } = isWelcomed.actions;

export const isWelcomedReducer = isWelcomed.reducer;
