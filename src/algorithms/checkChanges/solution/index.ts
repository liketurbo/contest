const checkChanges = (strBef: string, strAft: string) => {
  let leftChanges = 1

  for (let i = 0, j = 0; i < strBef.length || j < strAft.length; i++, j++) {
    if (strBef[i] === strAft[j]) continue

    if (strBef[i + 1] === strAft[j]) {
      i++
    } else if (strBef[i] === strAft[j + 1]) {
      j++
    } else {
      i++
      j++
    }

    leftChanges--
  }

  return leftChanges >= 0
}

export default checkChanges
