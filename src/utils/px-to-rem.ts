export const pxToRem = (px?: number, base = 16) => {
  return (1 / base) * (px ?? 0) + 'rem'
}
