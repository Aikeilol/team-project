import { FC } from 'react'
import { IFormData } from '../Auth/types'
import CustomForm from './components/CustomForm'
import { CustomInput } from './components/components/CustomInput'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

type FormValues = {
  first_name: string
  second_name: string
  login: string
  email: string
  phone: string
  password: string
  newPassword: string
  oldPassword: string
  display_name: string
}

interface IProps {
  formData: IFormData
}

export const Form: FC<IProps> = props => {
  const { dataInputs, buttonText } = props.formData
  // Здесь в defaultValues записываются initial значения инпутов
  // Например: defaultValues: {first_name: "Ivan", second_name: "Ivanov"}
  // Нужно сопоставить данные с бэка и инпуты, положить их значения в объект, а объект положить в defaultValues
  // Возможно стоит делать это из родительского компонента и прокидывать как пропс, чтобы не сопостовлять данные на всех формах.
  const {
    formState: { errors, isValid },
    register,
  } = useForm<FormValues>({ mode: 'onBlur', defaultValues: {} })

  return (
    <CustomForm>
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
        disabled={!isValid}
        fullWidth
        variant="contained"
        sx={{ mt: 23, mb: 2, maxWidth: '320px', width: '100%' }}>
        {buttonText}
      </Button>
    </CustomForm>
  )
}
