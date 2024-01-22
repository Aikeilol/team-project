import { FC } from 'react'
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { IProfileFormData } from '../../Profile/types'

interface IProps {
  title: string
  formData: IProfileFormData
}
const SettingsForm: FC<IProps> = ({title, formData}) => {
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
      <Box
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <input id="upload-avatar" type="file" hidden accept={'image/*'} />
        <label htmlFor="upload-avatar">
          <IconButton component="span">
            <Avatar
              alt={'avatar'}
              src={'/'}
              sx={{width: 130, height: 130}}
            />
          </IconButton>
        </label>
      </Box>
      <Typography
        component="p"
        variant="body2"
        align="center"
        sx={{mt: 4}}
      >{title}</Typography>
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

export default SettingsForm
