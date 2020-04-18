import path from "path"

import getMeetingWindows from "../solution"

const windowsA = [
  ["9:00", "10:30"],
  ["12:00", "13:00"],
  ["16:00", "18:00"],
]
const boundA = ["9:00", "20:00"]

const windowsB = [
  ["10:00", "11:30"],
  ["12:30", "14:30"],
  ["14:30", "15:00"],
  ["16:00", "17:00"],
]
const boundB = ["10:00", "18:30"]

const dur = 30

const output = [
  ["11:30", "12:00"],
  ["15:00", "16:00"],
  ["18:00", "18:30"],
]

describe(path.basename(path.join(__dirname, "..")), () => {
  test(`[${windowsA}],[${boundA}] [${windowsB}],[${boundB}] ${dur} return [${output}]`, () => {
    expect(
      getMeetingWindows(windowsA, boundA, windowsB, boundB, dur)
    ).toStrictEqual(output)
  })
})
