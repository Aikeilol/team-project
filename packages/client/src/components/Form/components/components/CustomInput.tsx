import { TextField, TextFieldProps } from '@mui/material'
import React, {
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react'

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
      type,
      label,
      id,
      margin,
      error,
      helperText,
      variant,
      defaultValue,
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
        error={error}
        helperText={helperText}
        sx={{ maxWidth: '320px', width: '100%' }}
        {...props}
      />
    )
  }
)
