import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FabTypeMap,
  TextField,
} from '@mui/material'
import React, { FormEvent } from 'react'
import ForumAddButton from '../ForumAddButton'

interface IInput {
  multiple?: boolean
  type?: string
  label: string
}

export interface DialogProps<T> {
  itemId: number
  cancelBtnText: string
  confirmBtnText: string
  dialogTitle: string
  input: IInput
  addBtnType?: 'medium' | 'small' | 'secondary'
  tooltip?: string
  addRequest: (id: number, text: string) => Promise<T>
  onConfirm: (item: T) => void
}

const ForumDialogWithInput = <T extends object>({
  itemId,
  cancelBtnText,
  confirmBtnText,
  dialogTitle,
  addBtnType,
  addRequest,
  onConfirm,
  input,
  tooltip,
}: DialogProps<T>) => {
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setText('')
  }

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(event.currentTarget.value)
  }

  const handleConfirm = () => {
    if (text === '') {
      return
    }

    async function addReq() {
      try {
        const data = await addRequest(itemId, text)
        if (data) {
          onConfirm(data)
          handleClose()
        }
      } catch (err) {
        console.log(err)
      }
    }

    addReq()
  }

  return (
    <div>
      <ForumAddButton
        tooltip={tooltip}
        size={addBtnType as FabTypeMap['props']['size']}
        click={handleClickOpen}
      />
      <Dialog
        scroll="body"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>

        <DialogContent>
          <TextField
            margin="dense"
            sx={{ minWidth: '400px' }}
            id="text"
            label={input.label}
            type={input.type ?? 'text'}
            minRows={input.multiple ? 3 : 1}
            maxRows={input.multiple ? 5 : 1}
            multiline={input.multiple ?? false}
            fullWidth
            onChange={handleChange}
            value={text ?? ''}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancelBtnText}
          </Button>
          <Button onClick={handleConfirm} type="submit" color="primary">
            {confirmBtnText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ForumDialogWithInput
