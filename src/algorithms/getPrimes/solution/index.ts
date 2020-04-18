import isPrime from "./isPrime"

const getPrimes = (n: number): number[] => {
  const primes: number[] = []

  for (let i = 2; i <= n; i++) if (isPrime(i)) primes.push(i)

  return primes
}

export default getPrimes
