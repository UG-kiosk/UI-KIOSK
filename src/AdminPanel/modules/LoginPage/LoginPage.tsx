import { Tile } from '@UG/libs/components';
import { LoginPageForm } from './LoginPageForm';
import { styled } from '@mui/material/styles';

const StyledTile = styled(Tile)`
  margin-left: 48px;
  margin-top: 146px;
  padding: 50px 0px 25px 75px;
`;

export const LoginPage = () => {
  return (
    <StyledTile tileWidth={885}>
      <LoginPageForm />
    </StyledTile>
  );
};
