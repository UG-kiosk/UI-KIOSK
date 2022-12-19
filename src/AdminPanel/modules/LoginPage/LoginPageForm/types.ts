export enum LoginFormFieldsNames {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export interface LoginFormTypes {
  [LoginFormFieldsNames.USERNAME]: string;
  [LoginFormFieldsNames.PASSWORD]: string;
}
