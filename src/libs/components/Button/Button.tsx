import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
}

const StyledButton = styled(MUIButton)(({ theme }) => ({
  margin: '26px',
  padding: '0px',
  paddingLeft: '26px',
  paddingRight: '26px',
  height: '46px',
  border: `3px solid ${theme.palette.primary.main}`,
  borderRadius: '50px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '24px',
  color: theme.palette.primary.main,
  textTransform: 'lowercase',
  '&:hover': {
    border: `3px solid ${theme.palette.secondary.dark}`,
  },
}));

export const Button = ({ text, type, name }: ButtonProps) => (
  <StyledButton data-cy={`${name}-button`} variant="outlined" type={type}>
    {text}
  </StyledButton>
);
