import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { LanguageChange } from '@UG/libs/components';
import { Namespaces } from '@UG/libs/types';
import ug_logo_pl from 'src/assets/images/ug_logo_pl_blue.png';
import ug_logo_en from 'src/assets/images/ug_logo_en_blue.png';
import eu_flag from 'src/assets/images/eu_flag.jpg';
import { useMemo } from 'react';

const StyledLogoPL = styled('img')`
  height: 60px;
`;

const StyledFlag = styled('img')`
  height: 32px;
`;

const StyledLine = styled('div')`
  border-left: 3px solid ${({ theme }) => theme.palette.secondary.main};
  height: 50px;
`;

const StyledGridElement = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
`;

export const Header = () => {
  const { t } = useTranslation(Namespaces.LIBS);

  const UGLogo = useMemo(() => {
    const logoName = t('ug_logo');

    if (logoName === 'ug_logo_en') return ug_logo_en;
    if (logoName === 'ug_logo_pl') return ug_logo_pl;

    return ug_logo_pl;
  }, [t]);

  return (
    <Grid
      position="fixed"
      zIndex={2}
      top={0}
      left={0}
      right={0}
      marginLeft="auto"
      marginRight="auto"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: 90,
        px: 6,
      }}
      data-cy="header"
    >
      <StyledGridElement data-cy="header-left">
        <StyledLogoPL src={UGLogo} alt="blue UG logo" data-cy="header-ug-logo"></StyledLogoPL>
        <StyledLine data-cy="header-line" />
      </StyledGridElement>

      <StyledGridElement data-cy="header-right">
        <LanguageChange />
        <StyledLine data-cy="header-line" />
        <StyledFlag src={eu_flag} alt="European Union Flag" data-cy="header-eu-flag"></StyledFlag>
      </StyledGridElement>
    </Grid>
  );
};
