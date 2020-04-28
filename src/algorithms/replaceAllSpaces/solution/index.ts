const replaceAllSpaces = (str: string) => {
  const charArr = str.split("")

  let i = charArr.length - 1
  let j = charArr.length - 1

  while (charArr[j] === " ") j--

  while (j >= 0) {
    if (charArr[j] === " ") {
      charArr[i] = "0"
      charArr[i - 1] = "2"
      charArr[i - 2] = "%"

      i -= 2
    } else {
      charArr[i] = charArr[j]
    }

    i--
    j--
  }

  return charArr.join("")
}

export default replaceAllSpaces
