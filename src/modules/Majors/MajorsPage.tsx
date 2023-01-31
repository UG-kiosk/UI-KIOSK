import { Box } from '@mui/material';
import { Header, Navbar } from '@UG/libs/components';
import { useParams } from 'react-router-dom';
import { MajorsList } from './MajorsList';
import { MajorDetails } from './MajorDetails';

export const MajorsPage = () => {
  const { _id } = useParams();

  if (_id) {
    return (
      <>
        <Header />
        <Box marginTop="150px" marginBottom="40px" marginLeft="auto" marginRight="auto" width={975}>
          <MajorDetails id={_id} />
        </Box>
        <Navbar />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box marginTop="150px" marginBottom="40px" marginLeft="auto" marginRight="auto" width={975}>
        <MajorsList />
      </Box>
      <Navbar />
    </>
  );
};
