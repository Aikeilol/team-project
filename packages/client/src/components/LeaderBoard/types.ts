export interface ILeader {
  id: number
  userFirstName: string
  userDisplayName: string
  userAvatar: string
  ratingSlytherinTeam: number
}
export interface IObjectLeader {
  data: ILeader
}
export interface ILeaderData {
  title: string
  listData: Array<IObjectLeader>
}
