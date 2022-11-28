import { useCallback } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { LoginFormFields } from './LoginFormFields';
import { LoginFormTypes, LoginFormFieldsNames } from './types';
import { validationSchema } from './validationSchema';

export const LoginPage = () => {
  const formMethods = useForm<LoginFormTypes>({
    defaultValues: { [LoginFormFieldsNames.USERNAME]: '', [LoginFormFieldsNames.PASSWORD]: '' },
    resolver: validationSchema,
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<LoginFormTypes> = useCallback(data => {
    formMethods.reset();
    alert(JSON.stringify(data));
  }, []);

  return (
    <FormProvider {...formMethods}>
      <form data-cy="admin-login-form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <LoginFormFields />
        <button data-cy="login-button" type="submit">
          Login
        </button>
      </form>
    </FormProvider>
  );
};
