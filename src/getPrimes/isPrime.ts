export default (num: number): boolean => {
  let isPrime = true

  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      isPrime = false

      break
    }

  return isPrime
}
