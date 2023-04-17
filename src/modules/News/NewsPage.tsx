import { useParams } from 'react-router-dom';
import { NewsDetails } from './NewsDetails';
import { NewsList } from './NewsList';

export const NewsPage = () => {
  const { _id } = useParams();

  if (_id) {
    return <NewsDetails id={_id} />;
  }
  return <NewsList />;
};
