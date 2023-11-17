import { Events } from '@UG/libs/types';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { finishLoading, setError, setEventsDetails, setEventsList, startLoading } from 'src/state/EventsSlice';

export const useGetEvents = () => {
  const dispatch = useDispatch();

  const getEventsList = useCallback(async () => {
    try {
      dispatch(startLoading());

      // url will be changed as soon as we deploy API
      const { data: EventsList } = await axios.get<Events[]>('http://localhost:3001/events');

      dispatch(setEventsList(EventsList));
      dispatch(finishLoading());
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Something went wrong';

      dispatch(setError(errorMessage));
      dispatch(finishLoading());
    }
  }, [dispatch]);

  const getEventsDetails = useCallback(
    async (id: string) => {
      try {
        dispatch(startLoading());

        // url will be changed as soon as we deploy API
        const { data: EventsDetails } = await axios.get<Events>(`http://localhost:3001/events/${id}`);

        dispatch(setEventsDetails(EventsDetails));
        dispatch(finishLoading());
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Something went wrong';

        dispatch(setError(errorMessage));
      }
    },
    [dispatch],
  );

  return { getEventsList, getEventsDetails };
};