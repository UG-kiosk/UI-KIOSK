import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Events } from '@UG/libs/types';

export interface EventsType {
  isLoading: boolean;
  eventsList: Events[];
  eventDetails: Events | null;
  error: string | null;
}

const initialState: EventsType = {
  isLoading: false,
  eventsList: [],
  eventDetails: null,
  error: null,
};

export const events = createSlice({
  name: 'events',
  initialState,
  reducers: {
    startLoading(state: EventsType) {
      state.isLoading = true;
      state.error = null;
    },
    setEventsList(state: EventsType, action: PayloadAction<Events[]>) {
      state.eventsList = action.payload;
      state.error = null;
    },
    setEventsDetails(state: EventsType, action: PayloadAction<Events>) {
      state.eventDetails = action.payload;
      state.error = null;
    },
    finishLoading(state: EventsType) {
      state.isLoading = false;
    },
    setError(state: EventsType, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { startLoading, setEventsList, setEventsDetails, finishLoading, setError } = events.actions;

export const eventsReducer = events.reducer;
