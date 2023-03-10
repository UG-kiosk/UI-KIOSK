import { useParams } from 'react-router-dom';
import { MajorsList } from './MajorsList';
import { MajorDetails } from './MajorDetails';

export const MajorsPage = () => {
  const { _id } = useParams();

  if (_id) {
    return <MajorDetails id={_id} />;
  }

  return <MajorsList />;
};
