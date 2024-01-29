export interface IListTitle {
  user: string
  rating: string
  cursor: string
  limit: string
}
export interface IListItem {
  id: number
  avatar: string
  display_name: string
  first_name: string
  second_name: string
  ratingFieldName: string
  cursor: number
  limit: number
}
export interface ILeaderData {
  title: string,
  listTitle: IListTitle
  listData: Array<IListItem>
}
