import React, { FC } from 'react'
import { IFormData } from '../../Auth/types'
import { Form } from '../../Form'

interface IProps {
  formData: IFormData
}
const PasswordEditForm: FC<IProps> = props => {
  return <Form {...props} />
}

export default PasswordEditForm
