import path from "path"

import {
  getArithmeticSeriesForm,
  getArithmeticSeriesIter,
  getArithmeticSeriesRec,
} from "../solution"
import runThrough from "./runThrough"

describe(path.basename(path.join(__dirname, "..")), () => {
  describe(getArithmeticSeriesRec.name, () => {
    runThrough(getArithmeticSeriesRec)
  })

  describe(getArithmeticSeriesIter.name, () => {
    runThrough(getArithmeticSeriesIter)
  })

  describe(getArithmeticSeriesForm.name, () => {
    runThrough(getArithmeticSeriesForm)
  })
})
