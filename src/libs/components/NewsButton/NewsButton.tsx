import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
}

const StyledButton = styled(MUIButton)`
  margin: 10px;
  padding: 0px;
  padding: 30px;
  height: 46px;
  text-transform: uppercase;
  border-radius: 25px;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: #fbfbfb;
  box-shadow: 0px 4px 4px 0px #00000040;
  &:hover {
    border: none;
  }
  &.selected {
    background-color: #0044b0;
    color: white;
  }
`;

export const NewsButton = ({ text, type, name, onClick, className }: ButtonProps) => (
  <StyledButton data-cy={`${name}-button`} variant="outlined" type={type} onClick={onClick} className={className}>
    {text}
  </StyledButton>
);
