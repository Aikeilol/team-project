import React, { FC } from 'react'
import { IFormData } from '../../Auth/types'
import { Form } from '../../Form'

interface IProps {
  formData: IFormData
}
const SettingsForm: FC<IProps> = props => {
  return <Form
    {...props} />
}

export default SettingsForm
