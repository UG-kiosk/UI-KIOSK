import { configureStore } from '@reduxjs/toolkit';
import { majorsReducer, MajorsType } from './state/MajorsSlice';
import { eventsReducer, EventsType } from './state/EventsSlice';
import { isWelcomedReducer, WelcomeType } from './state/WelcomeSlice';

export const store = configureStore({
  reducer: {
    isWelcomed: isWelcomedReducer,
    majors: majorsReducer,
    events: eventsReducer,
  },
});

export interface StateType {
  isWelcomed: WelcomeType;
  majors: MajorsType;
  events: EventsType;
}
