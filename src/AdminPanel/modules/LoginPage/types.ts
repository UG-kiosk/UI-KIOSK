export enum LoginFormFieldsNames {
  Username = 'username',
  Password = 'password',
}

export interface LoginFormTypes {
  [LoginFormFieldsNames.Username]: string;
  [LoginFormFieldsNames.Password]: string;
}
