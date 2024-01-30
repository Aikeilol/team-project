import { IUser } from '../../utils/scripts/api/types'

export interface ISettingsFormData {
  dataInputs: Array<IUser>
  buttonText?: string
}
export interface ISettingsData {
  formData: ISettingsFormData
}
