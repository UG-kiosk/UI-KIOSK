import { ContentContainer, Tile } from '@UG/libs/components';
import { LoginPageForm } from './LoginPageForm';
import { styled } from '@mui/material/styles';

const StyledTile = styled(Tile)`
  padding: 60px;
  align-items: flex-start;
`;

export const LoginPage = () => {
  return (
    <>
      <ContentContainer marginLeft={-6}>
        <StyledTile tileWidth={885} tileHeight={370}>
          <LoginPageForm />
        </StyledTile>
      </ContentContainer>
    </>
  );
};
