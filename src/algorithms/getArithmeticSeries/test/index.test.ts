import getFolderName from "../../../testUtils/getFolderName"
import {
  getArithmeticSeriesForm,
  getArithmeticSeriesIter,
  getArithmeticSeriesRec,
} from "../solution"
import runThrough from "./runThrough"

describe(getFolderName(), () => {
  describe(getArithmeticSeriesRec.name, () =>
    runThrough(getArithmeticSeriesRec)
  )

  describe(getArithmeticSeriesIter.name, () =>
    runThrough(getArithmeticSeriesIter)
  )

  describe(getArithmeticSeriesForm.name, () =>
    runThrough(getArithmeticSeriesForm)
  )
})
