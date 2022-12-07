import { Input } from '@UG/libs/components';
import { LoginFormFieldsNames } from './types';
import { styled } from '@mui/material/styles';

const StyledInputsDiv = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginFormFields = () => {
  return (
    <StyledInputsDiv>
      <Input name="login" fieldName={LoginFormFieldsNames.USERNAME} />
      <Input type="password" name="password" fieldName={LoginFormFieldsNames.PASSWORD} />
    </StyledInputsDiv>
  );
};
