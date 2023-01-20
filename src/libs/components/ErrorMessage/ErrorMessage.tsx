import { styled } from '@mui/material/styles';
import { Stack, Alert, AlertTitle } from '@mui/material';

const StyledAlertTitle = styled(AlertTitle)`
  font-family: 'Montserrat';
`;
const StyledAlert = styled(Alert)`
  font-family: 'Montserrat';
`;

export const ErrorMessage = () => (
  <Stack marginTop="150px" marginX="auto" width={975}>
    <StyledAlert severity="error">
      <StyledAlertTitle>Error</StyledAlertTitle>
      Sorry but we couldn&apos;t find the page you&apos;re looking for — <strong>404</strong>
    </StyledAlert>
  </Stack>
);
