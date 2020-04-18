import getFolderName from "../../../testUtils/getFolderName"
import { getMaxSubSumFast, getMaxSubSumSlow } from "../solution"
import runThrough from "./runThrough"

describe(getFolderName(), () => {
  describe(getMaxSubSumSlow.name, () => runThrough(getMaxSubSumSlow))

  describe(getMaxSubSumFast.name, () => runThrough(getMaxSubSumFast))
})
