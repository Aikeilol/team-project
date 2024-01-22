export type ProfileInput = {
  id: string
  label: string
  type: string
  name: string
}

export interface IProfileFormData {
  dataInputs: Array<ProfileInput>
}
export interface IProfileData {
  formData: IProfileFormData
}
