import { styled } from '@mui/material/styles';
import { Language } from '@UG/libs/types';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageChangeProps {
  color?: string;
}

const StyledLanguageChange = styled('button')<LanguageChangeProps>`
  color: ${({ theme, color }) => (color ? color : theme.palette.primary.main)};
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.light};
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 800;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LanguageChange = ({ color }: LanguageChangeProps) => {
  const { i18n } = useTranslation('home');

  const getLanguage = useMemo(() => {
    if (i18n.language === Language.EN) return Language.PL;
    if (i18n.language === Language.PL) return Language.EN;

    return Language.EN;
  }, [i18n.language]);

  const handleLanguageChange = useCallback(() => {
    i18n.changeLanguage(getLanguage);
  }, [getLanguage, i18n]);

  return (
    <StyledLanguageChange color={color} onClick={handleLanguageChange}>
      {getLanguage}
    </StyledLanguageChange>
  );
};
