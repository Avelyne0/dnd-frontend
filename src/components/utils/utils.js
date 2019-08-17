// const asc = (a, b) => a > b ? 1 : a < b ? -1 : 0
const desc = (a, b) => a > b ? -1 : a < b ? 1 : 0

const roll = (dieType = 6) => (amountToRoll = 1) => {
  let total = 0
  for (let rolled = 0; rolled < amountToRoll; rolled++) {
    const result = Math.ceil(Math.random() * dieType)
    total += result
  }
  return total
}

export const random = (array) => array[Math.floor((Math.random() * array.length))]

export const randomRange = (array) => {
  const a = array[0]
  const b = array[1]
  return Math.random() * (b - a) + a
}

export const rollAttribute = () => {
  const rolls = Array(4).fill().map(roll())
  const orderedRolls = [...rolls].sort(desc)
  const discarded = orderedRolls.pop()
  const result = orderedRolls.reduce((a, b) => a + b)
  console.log(`%c
Rolled: ${rolls.join(', ')}.
Discarded: ${discarded}.
Result: ${result}.
	`, 'font-size: 12px;')
  return result
}

// const rollAttributes = () =>
//   Array(6).fill().map(rollAttribute).sort(desc)


