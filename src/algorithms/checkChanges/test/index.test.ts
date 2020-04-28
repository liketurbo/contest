import getFolderName from "../../../testUtils/getFolderName"
import checkChanges from "../solution"

describe(getFolderName(), () => {
  test("one change away", () => {
    expect(checkChanges("pale", "ple")).toBe(true)
    expect(checkChanges("pales", "pale")).toBe(true)
    expect(checkChanges("pale", "bale")).toBe(true)
  })

  test("more than one change away", () => {
    expect(checkChanges("pale", "bake")).toBe(false)
  })
})
