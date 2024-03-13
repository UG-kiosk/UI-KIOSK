import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/system';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

const StyledButton = styled(MUIButton)(({ theme }) => ({
  margin: '10px',
  padding: '30px',
  height: '46px',
  textTransform: 'uppercase',
  borderRadius: '25px',
  border: 'none',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '29px',
  color: theme.palette.primary.main,
  backgroundColor: '#fbfbfb',
  boxShadow: '0px 4px 4px 0px #00000040',
  '&:hover': {
    border: 'none',
  },
  '&.selected': {
    backgroundColor: '#0044b0',
    color: 'white',
  },
}));

export const FilterButton = ({ text, type, onClick, className }: ButtonProps) => (
  <StyledButton data-cy={'button'} variant="outlined" type={type} onClick={onClick} className={className}>
    {text}
  </StyledButton>
);
