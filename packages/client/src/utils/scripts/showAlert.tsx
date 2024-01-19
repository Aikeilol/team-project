import { VariantType, enqueueSnackbar } from 'notistack'

const showAlert = (message: string, variant: VariantType) => {
  return enqueueSnackbar(message, {
    variant: variant,
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
  })
}

export default showAlert
