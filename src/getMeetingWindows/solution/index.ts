const differenceInMin = (timeA: string, timeB: string): number => {
  const [hA, minA] = timeA.split(":").map(Number)
  const [hB, minB] = timeB.split(":").map(Number)

  return hA * 60 + minA - (hB * 60 + minB)
}

/**
 * Return (+1) if "a" > "b".
 * Return (-1) if "a" < "b".
 */
const compareTime = (timeA: string, timeB: string): number =>
  Math.sign(differenceInMin(timeA, timeB))

const minTime = (timeA: string, timeB: string): string =>
  compareTime(timeA, timeB) === -1 ? timeA : timeB

const getMeetingWindows = (
  windowsA: string[][],
  boundA: string[],
  windowsB: string[][],
  boundB: string[],
  dur: number
): string[][] => {
  const compound: string[][] = []

  {
    let i = 0
    let j = 0

    while (i < windowsA.length && j < windowsB.length) {
      if (compareTime(windowsA[i][0], windowsB[j][0]) === -1)
        compound.push(windowsA[i++])
      else compound.push(windowsB[j++])
    }

    if (i !== windowsA.length) compound.push(...windowsA.slice(i))
    else if (j !== windowsB.length) compound.push(...windowsB.slice(j))
  }

  const emerged = []

  for (let i = 0, j = 1; i < compound.length; ) {
    const endA = compound[i][1]
    const endB = j in compound ? compound[j][1] : minTime(boundA[1], boundB[1])
    const startB =
      j in compound ? compound[j][0] : minTime(boundA[1], boundB[1])

    if (compareTime(endA, endB) === 1) j++
    else if (compareTime(endA, startB) === 1) {
      compound[j] = [endA, endB]
      i = j
      j++
    } else {
      i++
      j++

      if (differenceInMin(startB, endA) >= dur) emerged.push([endA, startB])
    }
  }

  return emerged
}

export default getMeetingWindows
