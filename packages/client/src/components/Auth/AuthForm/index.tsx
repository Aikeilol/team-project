import { FC } from 'react'
import { IFormData } from '../types'
import React from 'react'
import { Form } from '../../Form'

interface IProps {
  formData: IFormData
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const AuthForm: FC<IProps> = props => {
  return <Form {...props} />
}

export default AuthForm
