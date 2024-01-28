import { FC } from 'react'
import { IListData } from '../types'
import List from '@mui/material/List'
import React from 'react'
import LeaderBoardItem from '../LeaderBoardItem'

interface IProps {
  listData: IListData
}

const LeaderBoardList: FC<IProps> = (listData) => {
  const { list } = listData
  return (
    <List
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <LeaderBoardItem item={list}/>
    </List>
  )
}

export default LeaderBoardList
