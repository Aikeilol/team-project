import { IUser } from '../../utils/scripts/api/types'
export interface IProfileFormData {
  dataInputs: Array<IUser>
}
export interface IProfileData {
  formData: IProfileFormData
}
