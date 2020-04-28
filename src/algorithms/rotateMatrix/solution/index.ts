const rotateMatrix = (mtx: number[][], start = 0, end = mtx.length - 1) => {
  for (let i = start; i < end; i++) {
    const temp = mtx[start][i]

    mtx[start][i] = mtx[start + end - i][start]
    mtx[start + end - i][start] = mtx[end][start + end - i]
    mtx[end][start + end - i] = mtx[i][end]
    mtx[i][end] = temp
  }

  if (end - start > 1) rotateMatrix(mtx, start + 1, end - 1)

  return mtx
}

export default rotateMatrix
