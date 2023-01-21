import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FieldValues, useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  fieldName: string;
  type?: string;
}

const StyledLabel = styled('label')`
  margin-bottom: 19px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

const StyledTextField = styled(TextField)`
  width: 342px;
  & input {
    font-family: 'Montserrat';
    color: ${({ theme }) => theme.palette.primary.light};
    font-size: 20px;
    margin: 0px 20px;
    padding: 0px;
    width: 342px;
    height: 46px;
  }
  & .MuiOutlinedInput-root:hover {
    & fieldset {
      border: 3px solid ${({ theme }) => theme.palette.secondary.dark};
    }
  }
  & .MuiOutlinedInput-root fieldset {
    border: 3px solid ${({ theme }) => theme.palette.primary.light};
    border-radius: 50px;
  }
  & .MuiOutlinedInput-root.Mui-focused {
    & fieldset {
      border: 3px solid ${({ theme }) => theme.palette.secondary.dark};
    }
  }
  & label {
    font-family: 'Montserrat';
    font-weight: 700;
    color: ${({ theme }) => theme.palette.primary.light};
    margin-left: 20px;
    font-size: 20px;
    &.Mui-focused {
      color: ${({ theme }) => theme.palette.secondary.dark};
    }
  }
  & legend {
    font-family: 'Montserrat';
    font-weight: 700;
    color: ${({ theme }) => theme.palette.secondary.dark};
    margin-left: 20px;
    font-size: 20px;
  }
`;

const StyledError = styled('p')`
  color: ${({ theme }) => theme.palette.error.main};
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 4px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;

const StyledDiv = styled('div')`
  width: 350px;
  height: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

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
