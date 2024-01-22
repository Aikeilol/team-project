import { FC } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { IProfileFormData } from '../../Profile/types'

interface IProps {
  formData: IProfileFormData
}
const PasswordEditForm: FC<IProps> = ({formData}) => {
  const { dataInputs } = formData
  return (
    <Box
      component="form"
      sx={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          mb: 5,
        }
      }
    >
      {dataInputs.map(({ id, label, type, name }, index) =>(
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderBottom: t => `1px solid ${t.palette.divider}`,
          }}
        >
          <Box>{label}</Box>
          <TextField
            className={'inputCustom'}
            key={id + name}
            variant="standard"
            margin="normal"
            required
            id={id}
            type={type}
            name={name}
            autoFocus={index === 0}
            // value={inputs[name]}
            // onChange={handleChangeInput}
            sx={{ maxWidth: '320px', width: '100%' }}
          />
        </Box>
      ))}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 12, mb: 2, maxWidth: '320px', width: '100%' }}>
        {'Сохранить'}
      </Button>
    </Box>
  )
}

export default PasswordEditForm
