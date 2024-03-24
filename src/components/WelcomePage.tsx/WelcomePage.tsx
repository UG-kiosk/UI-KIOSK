import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { showMainView } from 'src/state/WelcomeSlice';
import { useCallback, useMemo } from 'react';
import { LanguageChange } from '@UG/libs/components';
import ug_logo_pl from 'src/assets/images/ug_logo_pl_white.png';
import ug_logo_en from 'src/assets/images/ug_logo_en_white.png';
import { useTranslation } from 'react-i18next';

const StyledHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '920px',
  margin: '50px 80px',
});

const StyledTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.secondary.light,
  width: '695px',
  height: '209px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '96px',
  lineHeight: '117px',
  textAlign: 'center',
}));

const StyledButton = styled('button')(({ theme }) => ({
  border: `5px solid ${theme.palette.secondary.light}`,
  borderRadius: '50px',
  height: '120px',
  width: '800px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '64px',
  lineHeight: '78px',
  textAlign: 'center',
  color: theme.palette.secondary.light,
  background: theme.palette.primary.main,
}));

const StyledImage = styled('img')({
  width: '831px',
  height: '500px',
});

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useTheme();

  const UGLogo = useMemo(() => {
    const logoName = t('ug_logo');

    if (logoName === 'ug_logo_en') return ug_logo_en;
    if (logoName === 'ug_logo_pl') return ug_logo_pl;

    return ug_logo_pl;
  }, [t]);

  const handleClick = useCallback(() => {
    dispatch(showMainView());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="250px"
      sx={{ width: 1080, height: 1920, margin: 'auto', bgcolor: theme => theme.palette.primary.main }}
      data-cy="welcome-page"
    >
      <StyledHeader>
        <LanguageChange bgColor={theme.palette.primary.main} color={theme.palette.primary.light} fontSize={48} />
      </StyledHeader>
      <StyledTitle data-cy="welcome-page-title">{t('institute')}</StyledTitle>
      <StyledButton onClick={handleClick} data-cy="welcome-page-button">
        {t('welcomePage.touchHere')}
      </StyledButton>
      <StyledImage src={UGLogo} alt="" data-cy="welcome-page-img" />
    </Box>
  );
};
