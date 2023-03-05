import { Button } from '@UG/libs/components';
import { useCallback } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { LoginFormFields } from './LoginFormFields';
import { LoginFormTypes, LoginFormFieldsNames } from './types';
import { usePrepareForm } from '../hooks';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Namespaces } from '@UG/libs/types';

const StyledForm = styled('form')`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
`;

export const LoginPageForm = () => {
  const { validationSchema } = usePrepareForm();
  const { t } = useTranslation(Namespaces.ADMIN_PANEL);
  const formMethods = useForm<LoginFormTypes>({
    defaultValues: { [LoginFormFieldsNames.USERNAME]: '', [LoginFormFieldsNames.PASSWORD]: '' },
    resolver: validationSchema,
    mode: 'onTouched',
    reValidateMode: 'onChange',
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
        <Button name="login" text={t('loginPage.logIn')} type="submit" />
      </StyledForm>
    </FormProvider>
  );
};
