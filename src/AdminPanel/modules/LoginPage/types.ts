export enum LoginFormFieldsNames {
  USERNAME = 'USERNAME',
  PASSWORD = 'PASSWORD',
}

export interface LoginFormTypes {
  [LoginFormFieldsNames.USERNAME]: string;
  [LoginFormFieldsNames.PASSWORD]: string;
}
