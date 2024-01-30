import React, { FC } from 'react'
import { Box, TableCell, TableRow, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { IListItem } from '../types'
interface IProps {
  item: IListItem
}
const LeaderBoardItem: FC<IProps> = ( item ) => {
  const {
    display_name,
    first_name,
    second_name,
    ratingFieldName,
    limit,
    avatar
  } = item.item

  return (
    <TableRow
      hover
    >
      <TableCell
        component="th"
        scope="row"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar src={avatar} />
          <Box sx={{ minWidth: 0 }}>
            <Typography noWrap fontWeight="lg">
              {display_name}
            </Typography>
            <Typography noWrap fontWeight="lg">
              {first_name} {second_name}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="left">{ratingFieldName}</TableCell>
      <TableCell align="left">{limit}</TableCell>
    </TableRow>
  )
}

export default LeaderBoardItem
