import { Input } from '@UG/libs/components';
import { LoginFormFieldsNames } from './types';
import { styled } from '@mui/material/styles';

const StyledFormFields = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginFormFields = () => {
  return (
    <StyledFormFields>
      <Input label="login" fieldName={LoginFormFieldsNames.USERNAME} />
      <Input type="password" label="password" fieldName={LoginFormFieldsNames.PASSWORD} />
    </StyledFormFields>
  );
};
