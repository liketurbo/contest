import path from "path"

import { getMaxSubSumFast, getMaxSubSumSlow } from "../solution"
import runThrough from "./runThrough"

describe(path.basename(path.join(__dirname, "..")), () => {
  describe(getMaxSubSumSlow.name, () => {
    runThrough(getMaxSubSumSlow)
  })

  describe(getMaxSubSumFast.name, () => {
    runThrough(getMaxSubSumFast)
  })
})
