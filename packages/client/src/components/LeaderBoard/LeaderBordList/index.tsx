import React, { FC, SetStateAction, useState } from 'react'
import { ILeader, IObjectLeader } from '../types'
import LeaderBoardItem from '../LeaderBoardItem'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material'
import { DisplayNameCol, RatingFieldNameCol } from '../data'

interface IProps {
  listData: Array<IObjectLeader>
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'
function getComparator<Key extends keyof never>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(
  array: (ILeader | undefined)[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

interface HeadCell {
  disablePadding: boolean
  id: string
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [DisplayNameCol, RatingFieldNameCol]

interface EnhancedTableHeadProps {
  order: Order
  orderBy: string
  rowCount: number
  onRequestSort: (event: MouseEvent, property: never | string) => void
}

const EnhancedTableHead = (props: EnhancedTableHeadProps) => {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler = (property: never | string) => (event: never) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span>{order === 'desc' ? '' : ''}</span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const LeaderBoardList: FC<IProps> = listData => {
  const rows = listData.listData

  const newRows = rows.map(item => {
    if (item.data) {
      return item.data
    }
  })
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState('')

  const handleRequestSort = (
    event: Event,
    property: SetStateAction<string>
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <Paper
      sx={{
        width: '100%',
      }}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size={'medium'}
          aria-label="enhanced table">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={newRows.length}
          />
          <TableBody>
            {stableSort(newRows, getComparator(order, orderBy)).map(row => {
              return <LeaderBoardItem key={row.id} item={row} />
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default LeaderBoardList
