class HashTable<T = string> {
  private storage: [string, T][][]

  private stored: number

  constructor() {
    this.storage = new Array(17)
    this.stored = 0
  }

  private hastStrToInt(key: string, limit = this.storage.length) {
    let hash = 17

    for (const ch of key) hash *= ch.codePointAt(0) as number

    return hash % limit
  }

  private overloaded() {
    const fact = this.stored / this.storage.length

    if (fact > 0.8) return true

    return false
  }

  private resize() {
    const newStorage = new Array(this.storage.length * 2)

    for (const pairs of this.storage)
      if (pairs)
        for (const pair of pairs) this.setKeyValue(pair[0], pair[1], newStorage)

    this.storage = newStorage
  }

  private setKeyValue(key: string, val: T, memory = this.storage) {
    const idx = this.hastStrToInt(key, memory.length)

    if (idx in memory) memory[idx].push([key, val])
    else memory[idx] = [[key, val]]
  }

  get size() {
    return this.storage.length
  }

  set(key: string, val: T) {
    this.stored++

    if (this.overloaded()) {
      this.resize()
    }

    this.setKeyValue(key, val)
  }

  get(key: string) {
    const idx = this.hastStrToInt(key)
    const val = this.storage[idx].find(pair => pair[0] === key)

    if (val) return val[1]

    return null
  }
}

export default HashTable
