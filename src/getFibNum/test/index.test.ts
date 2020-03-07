import path from "path"

import { getFibNumIter, getFibNumMem, getFibNumRec } from "../solution"
import runThrough from "./runThrough"

describe(`${path.basename(path.join(__dirname, ".."))}`, () => {
  describe(`${getFibNumRec.name}`, () => {
    runThrough(getFibNumRec)
  })

  describe(`${getFibNumMem.name}`, () => {
    runThrough(getFibNumMem)

    test("n = 77 return 5527939700884757", () => {
      expect(getFibNumMem(77)).toBe(5527939700884757)
    })
  })

  describe(`${getFibNumIter.name}`, () => {
    runThrough(getFibNumIter)

    test("n = 77 return 5527939700884757", () => {
      expect(getFibNumMem(77)).toBe(5527939700884757)
    })
  })
})
