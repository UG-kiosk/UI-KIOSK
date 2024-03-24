import { styled } from '@mui/material/styles';
import { Language } from '@UG/libs/types';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageChangeProps {
  color?: string;
  bgColor?: string;
  fontSize?: number;
}

const StyledLanguageChange = styled('button')<LanguageChangeProps>(({ theme, color, bgColor, fontSize }) => ({
  color: color ? color : theme.palette.primary.main,
  border: 'none',
  backgroundColor: bgColor ? bgColor : theme.palette.primary.light,
  fontFamily: 'Montserrat',
  fontSize: fontSize ? fontSize : 32,
  fontWeight: 800,
  lineHeight: '39px',
  letterSpacing: '0em',
}));

export const LanguageChange = ({ ...props }: LanguageChangeProps) => {
  const { i18n } = useTranslation();

  const getLanguage = useMemo(() => {
    if (i18n.language === Language.EN) return Language.PL;
    if (i18n.language === Language.PL) return Language.EN;

    return Language.EN;
  }, [i18n.language]);

  const handleLanguageChange = useCallback(() => {
    i18n.changeLanguage(getLanguage);
  }, [getLanguage, i18n]);

  return (
    <StyledLanguageChange {...props} onClick={handleLanguageChange} data-cy="language-change">
      {getLanguage}
    </StyledLanguageChange>
  );
};
