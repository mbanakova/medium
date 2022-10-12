export const range = (end) => {
  return [...Array(end).keys()].map(elem => elem + 1)
}