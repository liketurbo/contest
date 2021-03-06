import genRandomArr from "../../../testUtils/genRandomArr"
import getFolderName from "../../../testUtils/getFolderName"
import LinkedList from "../solution"

describe(getFolderName(), () => {
  const arr = genRandomArr()
  const linkedList = new LinkedList<number>()

  for (const num of arr) linkedList.add(num)

  test("can add and get", () => {
    expect(linkedList.get(0)).toBe(arr[0])
    expect(linkedList.get(arr.length - 1)).toBe(arr[arr.length - 1])
    expect(linkedList.get(arr.length)).toBeNull()
  })

  test("can remove", () => {
    expect(linkedList.get(0)).toBe(arr[0])
    expect(linkedList.delete(0)).toBe(arr[0])
    expect(linkedList.get(0)).toBe(arr[1])

    expect(linkedList.delete(arr.length - 2)).toBe(arr[arr.length - 1])
    expect(linkedList.get(arr.length - 3)).toBe(arr[arr.length - 2])
  })
})
