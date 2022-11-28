import { useForm, SubmitHandler } from 'react-hook-form';

type LoginData = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginData>({ mode: 'onTouched', defaultValues: { username: '', password: '' } });

  const onSubmit: SubmitHandler<LoginData> = data => {
    reset();
    alert(JSON.stringify(data));
  };

  return (
    <form data-cy="admin-login-form" onSubmit={handleSubmit(onSubmit)}>
      <label data-cy="username-label" htmlFor="username">
        Username:
      </label>
      <input data-cy="username-input" {...register('username', { required: 'Username is required!' })} />
      {errors.username && <p data-cy="username-error-field">{errors.username.message}</p>}

      <label data-cy="pasword-label" htmlFor="password">
        Password:
      </label>
      <input
        data-cy="password-input"
        type="password"
        {...register('password', { required: 'Password is required!' })}
      />
      {errors.password && <p data-cy="password-error-field">{errors.password.message}</p>}
      <input data-cy="submit-input" type="submit" value="Login" />
    </form>
  );
};
