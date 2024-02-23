import React, { FC } from 'react'
import { Box, TableCell, TableRow, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { ILeader } from '../types'
import getImageSrc from '../../../utils/scripts/getPath'
interface IProps {
  item: Partial<ILeader>

}
const LeaderBoardItem: FC<IProps> = ( item ) => {
  const {
    userDisplayName,
    userFirstName,
    ratingSlytherinTeam,
    userAvatar
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
          <Avatar src={getImageSrc(userAvatar as string)} />
          <Box sx={{ minWidth: 0 }}>
            <Typography noWrap fontWeight="lg">
              {userDisplayName}
            </Typography>
            <Typography noWrap fontWeight="lg">
              {userFirstName}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="left">{ratingSlytherinTeam}</TableCell>
    </TableRow>
  )
}

export default LeaderBoardItem
