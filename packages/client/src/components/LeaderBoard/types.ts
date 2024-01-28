
export interface IListItem {
  avatar: string
  display_name: string
  first_name: string
  second_name: string
  ratingFieldName: string
  cursor: number
  limit: number
}
export interface IListData {
  list: Array<object>
}

export interface ILeaderData {
  title: string,
  listData: IListData
}
