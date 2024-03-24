import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FieldValues, useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  fieldName: string;
  type?: string;
}
const StyledSearchTextField = styled(TextField)(({ theme }) => ({
  width: '710px',
  marginBottom: '40px',
  '& input': {
    fontFamily: 'Montserrat',
    color: theme.palette.primary.dark,
    marginLeft: '20px',
    marginRight: '20px',
  },
  '& .MuiInputBase-root': {
    height: '56px',
  },
  '& fieldset': {
    borderRadius: '25px',
  },
  '& .MuiOutlinedInput-root:hover': {
    '& fieldset': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  '& .MuiFormLabel-root': {
    fontWeight: 700,
  },
  '& label': {
    alignItems: 'center',
    fontWeight: 700,
    marginLeft: '30px',
    marginTop: '7px',
    color: theme.palette.secondary.main,
  },
  '& legend': {
    color: theme.palette.primary.main,
    marginLeft: '30px',
  },
}));

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
