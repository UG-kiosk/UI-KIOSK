import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { LoginFormFieldsNames, LoginFormTypes } from './types';

export const LoginFormFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormTypes>();

  return (
    <div>
      <label data-cy="username-label" htmlFor={LoginFormFieldsNames.Username}>
        Username:
      </label>
      <input
        data-cy="username-input"
        {...register(LoginFormFieldsNames.Username, { required: 'Username is required!' })}
      />
      <ErrorMessage data-cy="username-error" errors={errors} name={LoginFormFieldsNames.Username} as="p" />
      <label data-cy="password-label" htmlFor={LoginFormFieldsNames.Password}>
        Password:
      </label>
      <input
        data-cy="password-input"
        type="password"
        {...register(LoginFormFieldsNames.Password, { required: 'Password is required!' })}
      />
      <ErrorMessage data-cy="password-error" errors={errors} name={LoginFormFieldsNames.Password} as="p" />
    </div>
  );
};
