import { Box, Button, TextField } from '@mui/material'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Input } from '../types'

interface IProps {
  dataInputs: Array<Input>
}

interface IFormState {
  [name: string]: string
}

const AuthForm: FC<IProps> = ({ dataInputs }) => {
  const [inputs, setInputs] = useState<IFormState>(() => {
    const data: IFormState = {}

    dataInputs.forEach(input => {
      data[input.name] = ''
    })

    return data
  })

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setInputs(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      {dataInputs.map(({ id, label, type, name }, index) => (
        <TextField
          key={id + name}
          variant="filled"
          margin="normal"
          required
          id={id}
          label={label}
          type={type}
          name={name}
          autoFocus={index === 0}
          value={inputs[name]}
          onChange={handleChangeInput}
          sx={{ maxWidth: '320px', width: '100%' }}
        />
      ))}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 23, mb: 2, maxWidth: '320px', width: '100%' }}>
        Войти
      </Button>
    </Box>
  )
}

export default AuthForm
