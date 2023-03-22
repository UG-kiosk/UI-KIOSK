import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FieldValues, useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  fieldName: string;
  type?: string;
}
const StyledSearchTextField = styled(TextField)`
  width: 710px;
  margin-bottom: 40px;
  & input {
    font-family: 'Montserrat';
    color: ${({ theme }) => theme.palette.primary.dark};
    margin-left: 20px;
    margin-right: 20px;
  }
  & .MuiInputBase-root {
    height: 56px;
  }
  & fieldset {
    border-radius: 25px;
  }
  & .MuiOutlinedInput-root:hover {
    & fieldset {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
  }
  & .MuiFormLabel-root {
    font-weight: 700;
  }
  & label {
    align-items: center;
    font-weight: 700;
    margin-left: 30px;
    margin-top: 5px;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  & legend {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-left: 30px;
  }
`;

export const SearchInput = ({ label, fieldName, type = 'text' }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { ref: inputRef, ...inputProps } = register(fieldName);

  return (
    <StyledSearchTextField
      type={type}
      size="small"
      inputRef={inputRef}
      {...inputProps}
      label={label}
      error={!!errors?.[fieldName]}
      inputProps={{ 'data-cy': `${fieldName}-input` }}
    />
  );
};
