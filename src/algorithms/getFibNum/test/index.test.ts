import getFolderName from "../../../testUtils/getFolderName"
import { getFibNumIter, getFibNumMem, getFibNumRec } from "../solution"
import runThrough from "./runThrough"

describe(getFolderName(), () => {
  describe(getFibNumRec.name, () => runThrough(getFibNumRec))

  describe(getFibNumMem.name, () => {
    runThrough(getFibNumMem)

    test("n = 77 return 5527939700884757", () => {
      expect(getFibNumMem(77)).toBe(5527939700884757)
    })
  })

  describe(getFibNumIter.name, () => {
    runThrough(getFibNumIter)

    test("n = 77 return 5527939700884757", () => {
      expect(getFibNumMem(77)).toBe(5527939700884757)
    })
  })
})
