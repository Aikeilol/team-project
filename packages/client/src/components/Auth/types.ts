import {  RegisterOptions } from 'react-hook-form'

export type AuthInput = {
  id: string
  label: string
  type: string
  value?: string,
  name: InputName
  rules?: RegisterOptions
}

export type InputName =
  | 'first_name'
  | 'second_name'
  | 'login'
  | 'email'
  | 'phone'
  | 'password'
  | 'newPassword'
  | 'oldPassword'
  | 'display_name'

export type AuthFooterInfo = {
  text: string
  textLink: string
  route: string
}

export interface IFormData {
  dataInputs: Array<AuthInput>
  buttonText: string
}

export interface IAuthData {
  title: string
  formData: IFormData
  footerInfo: AuthFooterInfo
}
