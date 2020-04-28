import getFolderName from "../../../testUtils/getFolderName"
import stringCompression from "../solution"

describe(getFolderName(), () => {
  test("original string length greater return compressed", () => {
    expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3")
  })

  test("original string length lesser return original", () => {
    expect(stringCompression("aabccaa")).toBe("aabccaa")
  })
})
