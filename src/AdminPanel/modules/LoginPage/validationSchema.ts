import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormFieldsNames } from './types';

export const validationSchema = yupResolver(
  Yup.object().shape({
    [LoginFormFieldsNames.USERNAME]: Yup.string().required('Username is required!'),
    [LoginFormFieldsNames.PASSWORD]: Yup.string().required('Password is required!'),
  }),
);
