import { FC } from 'react'
import { IFormData } from '../Auth/types'
import CustomForm from './components/CustomForm'
import { CustomInput } from './components/components/CustomInput'
import { Button } from '@mui/material'

type FormValues = {
  first_name: string
  second_name: string
  login: string
  email: string
  phone: string
  password: string
}

interface IProps {
  formData: IFormData
}

export const Form: FC<IProps> = props => {
  const { dataInputs, buttonText } = props.formData
  return (
    <CustomForm<FormValues>>
      {({ register, formState: { errors, isDirty, isValid } }) => (
        <>
          {dataInputs &&
            Array.isArray(dataInputs) &&
            dataInputs.map(({ id, name, rules, ...props }, index) => {
              return (
                <CustomInput
                  key={id}
                  autoFocus={index === 0}
                  error={!!errors[name]}
                  helperText={errors[name]?.message}
                  {...props}
                  {...(register && register(name, rules))}
                />
              )
            })}
          <Button
            type="submit"
            disabled={!isDirty || !isValid}
            fullWidth
            variant="contained"
            sx={{ mt: 23, mb: 2, maxWidth: '320px', width: '100%' }}>
            {buttonText}
          </Button>
        </>
      )}
    </CustomForm>
  )
}
