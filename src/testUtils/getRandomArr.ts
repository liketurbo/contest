import getRandomInt from "./getRandomInt"

const getRandomArr = (min = 10, max = 50) => {
  const arr = Array.from(new Array(getRandomInt(min, max)), () =>
    getRandomInt(-100, 100)
  )

  return arr
}

export default getRandomArr
