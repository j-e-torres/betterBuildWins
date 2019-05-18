// const percentNumberLimiter = obj => {
//   if (Number(obj.value) > obj.max) this.setState({ physicalPercent })
//   else if (Number(obj.value) < obj.min) obj.value = obj.min
// }

// export { percentNumberLimiter }

export const itemValidation = (item, items) => {
  const found = Object.keys(items).reduce((acc, key) => {
    if (items[key].name === item) {
      acc[key] = items[key]
    }
    return acc
  }, {})

  return found
}

export const champValidation = (champ, champions) => {
  const found = Object.keys(champions).reduce((acc, key) => {
    if (champions[key].name === champ) {
      acc[key] = champions[key]
    }
    return acc
  }, {})

  return found
}
