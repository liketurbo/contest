import genRandomInt from "./genRandomInt"

const genRandomArr = (min = 10, max = 50) => {
  const arr = Array.from(new Array(genRandomInt(min, max)), () =>
    genRandomInt(-100, 100)
  )

  return arr
}

export default genRandomArr
