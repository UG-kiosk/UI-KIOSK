import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
}

const StyledButton = styled(MUIButton)`
  margin: 26px;
  padding: 0px;
  padding-left: 26px;
  padding-right: 26px;
  height: 46px;
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: lowercase;
  &:hover {
    border: 3px solid ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const Button = ({ text, type, name }: ButtonProps) => (
  <StyledButton data-cy={`${name}-button`} variant="outlined" type={type}>
    {text}
  </StyledButton>
);
