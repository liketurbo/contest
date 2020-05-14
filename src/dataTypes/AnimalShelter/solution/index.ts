import Queue from "../../Queue/solution"
import Animal, { AnimalType } from "./Animal"

class AnimalShelter {
  dogs: Queue<Animal>
  cats: Queue<Animal>

  constructor() {
    this.dogs = new Queue()
    this.cats = new Queue()
  }

  enqueue(type: AnimalType) {
    if (type === "cat") this.cats.add(new Animal("cat"))
    else if (type === "dog") this.dogs.add(new Animal("dog"))
  }

  dequeueCat() {
    return this.cats.delete()
  }

  dequeueDog() {
    return this.dogs.delete()
  }

  dequeueAny() {
    if (!this.dogs.peek()) return this.cats.delete()
    else if (!this.cats.peek()) return this.dogs.delete()

    const next =
      (this.dogs.peek() as Animal).arrived <
      (this.cats.peek() as Animal).arrived
        ? this.dogs.delete()
        : this.cats.delete()

    return next
  }
}

export default AnimalShelter
