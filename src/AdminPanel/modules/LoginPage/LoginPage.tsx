import { Header, Tile } from '@UG/libs/components';
import { LoginPageForm } from './LoginPageForm';
import { styled } from '@mui/material/styles';

const StyledTile = styled(Tile)`
  margin-left: 48px;
  margin-top: 146px;
  padding: 60px;
`;

export const LoginPage = () => {
  return (
    <>
      <Header />
      <StyledTile tileWidth={885} tileHeight={370}>
        <LoginPageForm />
      </StyledTile>
    </>
  );
};
