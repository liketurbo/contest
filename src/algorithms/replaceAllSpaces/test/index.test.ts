import getFolderName from "../../../testUtils/getFolderName"
import replaceAllSpaces from "../solution"

describe(getFolderName(), () => {
  test('return string with replaced " " to "%20"', () => {
    expect(replaceAllSpaces("Mr John Smith    ")).toBe("Mr%20John%20Smith")
  })
})
