import getRandomInt from "./getRandomInt"

const getRandomArr = () => {
  const arr = Array.from(new Array(getRandomInt(10, 50)), () =>
    getRandomInt(-100, 100)
  )

  return arr
}

export default getRandomArr
