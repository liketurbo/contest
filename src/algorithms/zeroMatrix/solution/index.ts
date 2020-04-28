const zeroMatrix = (mtx: number[][]) => {
  const zeroRows = []
  const zeroCols = []

  for (const [i, row] of mtx.entries()) {
    for (const [j, col] of row.entries()) {
      if (col) continue

      zeroRows.push(i)
      zeroCols.push(j)
    }
  }

  for (const row of zeroRows)
    for (let i = 0; i < mtx[row].length; i++) mtx[row][i] = 0

  for (const col of zeroCols)
    for (let i = 0; i < mtx.length; i++) mtx[i][col] = 0

  return mtx
}

export default zeroMatrix
