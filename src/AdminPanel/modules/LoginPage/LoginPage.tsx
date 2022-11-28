import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { LoginFormFields } from './LoginFormFields';
import { LoginFormTypes, LoginFormFieldsNames } from './types';

export const LoginPage = () => {
  const formMethods = useForm<LoginFormTypes>({
    defaultValues: { [LoginFormFieldsNames.Username]: '', [LoginFormFieldsNames.Password]: '' },
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<LoginFormTypes> = data => {
    formMethods.reset();
    alert(JSON.stringify(data));
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form data-cy="admin-login-form" onSubmit={formMethods.handleSubmit(onSubmit)}>
          <LoginFormFields />
          <button data-cy="login-button" type="submit">
            Login
          </button>
        </form>
      </FormProvider>
    </>
  );
};
