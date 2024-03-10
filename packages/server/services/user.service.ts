import { User } from '../models/forum'
import { UserAttributes } from '../models/forum/user'

export const createOrUpdateUser = async (userObj: UserAttributes) => {
  const userObjId = Number(userObj.id)

  let user = await User.findOne({
    where: {
      id: userObjId,
    },
  })

  if (!user) {
    user = await User.create({ ...userObj, id: userObjId })
  } else {
    if (
      user.display_name !== userObj.display_name ||
      user.avatar !== userObj.avatar
    ) {
      await User.update(
        { display_name: userObj.display_name, avatar: userObj.avatar },
        {
          where: {
            id: userObjId,
          },
        }
      )
    }
  }

  return user
}
