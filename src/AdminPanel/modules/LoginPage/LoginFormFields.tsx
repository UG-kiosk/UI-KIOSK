import { Input } from '@UG/libs/components';
import { useFormContext } from 'react-hook-form';
import { LoginFormFieldsNames, LoginFormTypes } from './types';
import { styled } from '@mui/material/styles';

const StyledInputsDiv = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginFormFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormTypes>();

  return (
    <StyledInputsDiv>
      <Input
        type="text"
        content="login"
        register={register}
        fieldName={LoginFormFieldsNames.USERNAME}
        errors={errors}
      />
      <Input
        type="password"
        content="password"
        register={register}
        fieldName={LoginFormFieldsNames.PASSWORD}
        errors={errors}
      />
    </StyledInputsDiv>
  );
};
