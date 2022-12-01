import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { LoginFormFieldsNames, LoginFormTypes } from './types';

export const LoginFormFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormTypes>();

  return (
    <>
      <label data-cy="username-label" htmlFor={LoginFormFieldsNames.USERNAME}>
        Username:
      </label>
      <input data-cy="username-input" {...register(LoginFormFieldsNames.USERNAME)} />
      <ErrorMessage data-cy="username-error" errors={errors} name={LoginFormFieldsNames.USERNAME} as="p" />
      <label data-cy="password-label" htmlFor={LoginFormFieldsNames.PASSWORD}>
        Password:
      </label>
      <input data-cy="password-input" type="password" {...register(LoginFormFieldsNames.PASSWORD)} />
      <ErrorMessage data-cy="password-error" errors={errors} name={LoginFormFieldsNames.PASSWORD} as="p" />
    </>
  );
};
