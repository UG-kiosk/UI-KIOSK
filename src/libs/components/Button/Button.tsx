import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
}

const StyledButton = styled(MUIButton)`
  margin: 25px;
  padding: 0px;
  width: 96px;
  height: 46px;
  border: 3px solid #0055d2;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #095eac;
  text-transform: lowercase;
  transform: matrix(1, -0.01, 0.01, 1, 0, 0);
  &:hover {
    border: 3px solid #0044b0;
  }
`;

export const Button = ({ text, type, name }: ButtonProps) => (
  <StyledButton data-cy={`${name}-button`} variant="outlined" type={type}>
    {text}
  </StyledButton>
);
