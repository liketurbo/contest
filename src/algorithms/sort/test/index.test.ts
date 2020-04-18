import getFolderName from "../../../testUtils/getFolderName"
import bubbleSort from "../solution/bubbleSort"
import insertionSort from "../solution/insertionSort"
import runThrough from "./runThrough"

describe(getFolderName(), () => {
  describe(insertionSort.name, () => runThrough(insertionSort))

  describe(bubbleSort.name, () => runThrough(bubbleSort))
})
