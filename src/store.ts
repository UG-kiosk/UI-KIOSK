import { configureStore } from '@reduxjs/toolkit';
import { majorsReducer, MajorsType } from './state/MajorsSlice';
import { isWelcomedReducer, WelcomeType } from './state/WelcomeSlice';
import { staffReducer, StaffType } from './state/StaffSlice';
import { eventsReducer, EventsType } from './state/EventsSlice';
import { newsReducer, NewsType } from './state/NewsSlice';

export const store = configureStore({
  reducer: {
    isWelcomed: isWelcomedReducer,
    majors: majorsReducer,
    staff: staffReducer,
    news: newsReducer,
    events: eventsReducer,
  },
});

export interface StateType {
  isWelcomed: WelcomeType;
  majors: MajorsType;
  staff: StaffType;
  news: NewsType;
  events: EventsType;
}
