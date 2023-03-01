import { Tile } from '@UG/libs/components';
import { LoginPageForm } from './LoginPageForm';
import { styled } from '@mui/material/styles';

const StyledTile = styled(Tile)`
  padding: 60px;
  align-items: flex-start;
`;

export const LoginPage = () => {
  return (
    <>
      <StyledTile tileWidth={885} tileHeight={370}>
        <LoginPageForm />
      </StyledTile>
    </>
  );
};
