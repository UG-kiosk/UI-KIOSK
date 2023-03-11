import { useParams } from 'react-router-dom';
import { StaffDetails } from './StaffDetails';
import { StaffList } from './StaffList';

export const StaffPage = () => {
  const { _id } = useParams();

  if (_id) {
    return <StaffDetails id={_id} />;
  }

  return <StaffList />;
};
