class Animal {
  type: AnimalType
  arrived: number

  constructor(type: AnimalType) {
    this.type = type
    this.arrived = Date.now()
  }
}

export type AnimalType = "cat" | "dog"

export default Animal
