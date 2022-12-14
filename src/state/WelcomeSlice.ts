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
    showMainView(state: WelcomeType) {
      state.isWelcomed = true;
    },
  },
});

export const { showMainView } = isWelcomed.actions;

export const isWelcomedReducer = isWelcomed.reducer;
