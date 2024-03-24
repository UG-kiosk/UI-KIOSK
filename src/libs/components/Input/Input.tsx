import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FieldValues, useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  fieldName: string;
  type?: string;
}

const StyledLabel = styled('label')(({ theme }) => ({
  marginBottom: '19px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '29px',
  color: theme.palette.secondary.dark,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '342px',
  '& input': {
    fontFamily: 'Montserrat',
    color: theme.palette.primary.light,
    fontSize: '20px',
    margin: '0px 20px',
    padding: '0px',
    width: '342px',
    height: '46px',
  },
  '& .MuiOutlinedInput-root:hover': {
    '& fieldset': {
      border: `3px solid ${theme.palette.secondary.dark}`,
    },
  },
  '& .MuiOutlinedInput-root fieldset': {
    border: `3px solid ${theme.palette.primary.light}`,
    borderRadius: '50px',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& fieldset': {
      border: `3px solid ${theme.palette.secondary.dark}`,
    },
  },
  '& label': {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: theme.palette.primary.light,
    marginLeft: '20px',
    fontSize: '20px',
    '&.Mui-focused': {
      color: theme.palette.secondary.dark,
    },
  },
  '& legend': {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: theme.palette.secondary.dark,
    marginLeft: '20px',
    fontSize: '20px',
  },
}));

const StyledError = styled('p')(({ theme }) => ({
  color: theme.palette.error.main,
  fontFamily: 'Montserrat',
  fontWeight: '400',
  fontSize: '0.75rem',
  lineHeight: '1.66',
  letterSpacing: '0.03333em',
  textAlign: 'left',
  marginTop: '4px',
  marginRight: '14px',
  marginBottom: '0',
  marginLeft: '14px',
}));

const StyledDiv = styled('div')({
  width: '350px',
  height: '120px',
  display: 'flex -webkit-box -ms-flexbox',
  '-webkit-box-orient': 'vertical',
  '-webkit-box-direction': 'normal',
  '-ms-flex-direction': 'column',
  'flex-direction': 'column',
});

export const Input = ({ label, fieldName, type = 'text' }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { ref: inputRef, ...inputProps } = register(fieldName);

  return (
    <StyledDiv>
      <StyledLabel data-cy={`${fieldName}-label`}>{label}</StyledLabel>
      <StyledTextField
        type={type}
        size="small"
        inputRef={inputRef}
        {...inputProps}
        label={label}
        error={!!errors?.[fieldName]}
        inputProps={{ 'data-cy': `${fieldName}-input` }}
      />
      {errors?.[fieldName] && (
        <StyledError data-cy={`${fieldName}-error`}>
          <>{errors?.[fieldName]?.message}</>
        </StyledError>
      )}
    </StyledDiv>
  );
};
