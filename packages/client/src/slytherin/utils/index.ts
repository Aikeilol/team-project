export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export function generateColor() {
  const hexSet = '0123456789ABCDEF'
  let finalHexString = '#'
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)]
  }
  return finalHexString
}
