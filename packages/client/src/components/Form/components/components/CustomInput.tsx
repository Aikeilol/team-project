import { TextField, TextFieldProps } from '@mui/material'
import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  TextFieldProps

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      name,
      autoFocus,
      value,
      type,
      label,
      id,
      margin,
      error,
      helperText,
      variant,
    } = props

    return (
      <TextField
        ref={ref}
        variant={variant ? variant : 'filled'}
        margin={margin ? margin : 'normal'}
        id={id}
        label={label}
        type={type}
        name={name}
        autoFocus={autoFocus}
        value={value}
        error={error}
        helperText={helperText}
        sx={{ maxWidth: '320px', width: '100%' }}
        {...props}
      />
    )
  }
)
