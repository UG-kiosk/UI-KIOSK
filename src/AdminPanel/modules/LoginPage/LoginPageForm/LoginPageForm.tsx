import { CustomButton } from '@UG/libs/components';
import { useCallback } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { LoginFormFields } from './LoginFormFields';
import { LoginFormTypes, LoginFormFieldsNames } from './types';
import { validationSchema } from './validationSchema';
import { styled } from '@mui/material/styles';

const StyledForm = styled('form')`
  margin-left: 48px;
  margin-top: 75px;
  display: flex;
  align-items: flex-end;
  padding: 50px 0px 25px 75px;
  width: 885px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 55px;
`;

export const LoginPageForm = () => {
  const formMethods = useForm<LoginFormTypes>({
    defaultValues: { [LoginFormFieldsNames.USERNAME]: '', [LoginFormFieldsNames.PASSWORD]: '' },
    resolver: validationSchema,
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<LoginFormTypes> = useCallback(
    data => {
      formMethods.reset();
      alert(JSON.stringify(data));
    },
    [formMethods],
  );

  return (
    <FormProvider {...formMethods}>
      <StyledForm data-cy="admin-login-form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <LoginFormFields />
        <CustomButton name="login" text="log in" type="submit" />
      </StyledForm>
    </FormProvider>
  );
};
