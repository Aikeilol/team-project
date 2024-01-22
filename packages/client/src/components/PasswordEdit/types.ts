export type PwdEditInput = {
  id: string
  label: string
  type: string
  name: string
}

export interface IPwdEditFormData {
  dataInputs: Array<PwdEditInput>
}
export interface IPwdEditData {
  formData: IPwdEditFormData
}
