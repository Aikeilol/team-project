import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../../db'

export type UserAttributes = {
  id: number
  display_name: string
  email: string
  avatar: string | null
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const User = sequelize.define<UserInstance>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display_name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
)

export default User
