import { useParams } from 'react-router-dom';
import { EventsDetails } from './EventsDetails';
import { EventsList } from './EventsList';

export const EventsPage = () => {
  const { _id } = useParams();

  if (_id) {
    return <EventsDetails id={_id} />; // Fix: Pass the required props to the EventsDetails component
  }
  return <EventsList />;
};
