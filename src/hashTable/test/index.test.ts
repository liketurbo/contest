import path from "path"

import HashTable from "../solution"

describe(path.basename(path.join(__dirname, "..")), () => {
  test("read/write operation (small values)", () => {
    const hashTable = new HashTable()

    expect(hashTable.set("hello", "world a")).toBeUndefined()
    expect(hashTable.set("bye", "world b")).toBeUndefined()
    expect(hashTable.get("hello")).toBe("world a")
  })

  test("read/write operation (big values)", () => {
    const hashTable = new HashTable()
    const array = Array.from(new Array(1000), (_, idx) => idx.toString())

    for (const num of array) hashTable.set(num, num)

    for (const num of array) expect(hashTable.get(num)).not.toBeNull()
  })

  test("resizing works", () => {
    const hashTable = new HashTable()
    const array = Array.from(new Array(1000), (_, idx) => idx.toString())

    const oldSize = hashTable.size

    for (const num of array) hashTable.set(num, num)

    expect(hashTable.size).not.toBe(oldSize)
  })
})
