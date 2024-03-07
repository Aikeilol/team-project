export const returnNumber = (value: string, defl: number) => {
  const num = parseInt(value as string)
  if (isNaN(num) || num < 1) {
    return defl
  }
  return num
}
