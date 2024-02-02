export interface IListItem {
  id: number
  avatar?: string
  display_name: string
  first_name?: string
  second_name?: string
  ratingFieldName?: string
  cursor?: number
  limit?: number
}
export interface ILeaderData {
  title: string
  listData: Array<IListItem>
}
