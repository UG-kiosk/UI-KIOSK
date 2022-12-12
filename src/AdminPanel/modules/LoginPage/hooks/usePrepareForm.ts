import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormFieldsNames } from '../LoginPageForm/types';
import { useMemo } from 'react';
import { Namespaces, Language } from '@UG/libs/types';

export const usePrepareForm = () => {
  const { t, i18n } = useTranslation(Namespaces.ADMIN_PANEL);

  const formFieldNames = useMemo(() => {
    switch (i18n.language) {
      case Language.EN:
        return { username: 'Username', password: 'Password' };

      case Language.PL:
        return { username: 'Login', password: 'Hasło' };

      default:
        return { username: 'Username', password: 'Password' };
    }
  }, [i18n.language]);

  const validationSchema = useMemo(
    () =>
      yupResolver(
        Yup.object().shape({
          [LoginFormFieldsNames.USERNAME]: Yup.string().required(
            t('loginPage.requiredError', { field: formFieldNames.username }) || '',
          ),
          [LoginFormFieldsNames.PASSWORD]: Yup.string().required(
            t('loginPage.requiredError', { field: formFieldNames.password }) || '',
          ),
        }),
      ),
    [formFieldNames.password, formFieldNames.username, t],
  );

  return { validationSchema };
};
