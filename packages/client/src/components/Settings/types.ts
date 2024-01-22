export type SettingsInput = {
  id: string
  label: string
  type: string
  name: string
}

export interface ISettingsFormData {
  dataInputs: Array<SettingsInput>
}
export interface ISettingsData {
  formData: ISettingsFormData
}
