import { FC } from 'react'
import { IListItem} from '../types'
import List from '@mui/material/List'
import React from 'react'
import LeaderBoardItem from '../LeaderBoardItem'

interface IProps {
  listData: Array<IListItem>
}

const LeaderBoardList: FC<IProps> = (listData) => {
  const users = listData.listData
  console.log('listData lbl', users)
  return (
    <List
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
      }}
    >
      {users && Array.isArray(users) && users.map((props: IListItem) => {
        return (
          <LeaderBoardItem
            key={props.id}
            item={props}
          />
        )
      })}
    </List>
  )
}

export default LeaderBoardList
