export type AuthInput = {
  id: string
  label: string
  type: string
  name: string
}

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
