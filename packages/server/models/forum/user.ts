import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../db'

export type UserAttributes = {
  id: number
  display_name: string
  avatar: string | null
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const User = sequelize.define<UserInstance>('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  display_name: {
    type: DataTypes.STRING,
  },
})

export default User
