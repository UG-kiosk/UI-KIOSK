import { Input } from '@UG/libs/components';
import { LoginFormFieldsNames } from './types';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Namespaces } from '@UG/libs/types';

const StyledFormFields = styled('div')`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 20px;
`;

export const LoginFormFields = () => {
  const { t } = useTranslation(Namespaces.ADMIN_PANEL);

  return (
    <StyledFormFields>
      <Input label={t('loginPage.login')} fieldName={LoginFormFieldsNames.USERNAME} />
      <Input type="password" label={t('loginPage.password')} fieldName={LoginFormFieldsNames.PASSWORD} />
    </StyledFormFields>
  );
};
