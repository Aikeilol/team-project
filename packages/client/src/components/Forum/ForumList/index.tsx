import { Typography } from '@mui/material'
import List from '@mui/material/List'
import React, { Key } from 'react'

interface IProps<T extends { id: number }> {
  template: (data: T, key: Key) => JSX.Element
  data: T[]
}

export default function ForumList<T extends { id: number }>(props: IProps<T>) {
  const { template, data } = props

  return (
    <>
      {!!data?.length && (
        <List
          sx={{
            overflow: 'auto',
            maxWidth: 1400,
            maxHeight: 'calc(100vh - 330px)',
            bgcolor: 'background.paper',
            padding: '0 30px',
            boxSizing: 'content-box',
          }}>
          {data.map((dataElem, i) => template(dataElem, `${dataElem.id}.${i}`))}
        </List>
      )}

      {!data?.length && (
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Нет данных
        </Typography>
      )}
    </>
  )
}
