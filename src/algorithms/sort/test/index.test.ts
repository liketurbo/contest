import path from "path"

import bubbleSort from "../solution/bubbleSort"
import insertionSort from "../solution/insertionSort"
import runThrough from "./runThrough"

describe(path.basename(path.join(__dirname, "..")), () => {
  describe(insertionSort.name, () => runThrough(insertionSort))

  describe(bubbleSort.name, () => runThrough(bubbleSort))
})
