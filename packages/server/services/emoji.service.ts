import { Emoji } from '../models/forum'

export const getEmojis = async () => {
  const emojis = await Emoji.findAll()

  return emojis.map(({ dataValues }) => ({
    id: dataValues.id,
    unicode: dataValues.unicode,
  }))
}

export default { getEmojis }
