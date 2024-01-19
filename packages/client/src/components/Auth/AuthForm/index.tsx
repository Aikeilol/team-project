import { FC } from 'react'
import { IFormData } from '../types'
import { Form } from '../../Form'

interface IProps {
  formData: IFormData
}

const AuthForm: FC<IProps> = props => {
  return <Form {...props} />
}

export default AuthForm
