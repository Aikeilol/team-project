import { Box, FormControl } from '@mui/material'
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from 'react-hook-form'
import { Form } from 'react-router-dom'

type FormProps<TFormValues extends FieldValues> = {
  onSubmit?: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
}

const CustomForm = <TFormValues extends FieldValues>({
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ mode: 'onBlur' })

  return (
    <Box
      component={Form}
      method="post"
      noValidate
      autoComplete="off"
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <FormControl sx={{ maxWidth: '320px', width: '100%' }}>
        {children(methods)}
      </FormControl>
    </Box>
  )
}

export default CustomForm
