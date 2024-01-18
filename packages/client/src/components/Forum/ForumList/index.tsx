import { Typography } from '@mui/material'
import List from '@mui/material/List'
import { Key } from 'react'

interface IProps<T extends { id: number }> {
  template: (data: T, key: Key) => JSX.Element
  data: T[]
}

export default function ForumList<T extends { id: number }>(props: IProps<T>) {
  const { template, data } = props

  return (
    <>
      {!!data.length && (
        <List
          sx={{
            overflow: 'auto',
            width: '100%',
            maxWidth: 1400,
            bgcolor: 'background.paper',
            padding: '0 30px',
            boxSizing: 'content-box',
          }}>
          {data.map((dataElem, i) => template(dataElem, `${dataElem.id}.${i}`))}
        </List>
      )}

      {!data.length && (
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Нет данных
        </Typography>
      )}
    </>
  )
}
