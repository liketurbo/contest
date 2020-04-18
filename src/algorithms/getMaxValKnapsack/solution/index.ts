/* eslint-disable padding-line-between-statements */
const knapsackRecursive = (
  items: { weight: number; value: number }[],
  cap: number,
  idx = 0,
  cache: { [key: number]: { [key: number]: number } } = {}
): number => {
  if (idx > items.length - 1 || cap === 0) return 0

  if (!(idx in cache)) cache[idx] = {}
  if (cap in cache[idx]) return cache[idx][cap]

  let resWith = 0

  if (items[idx].weight <= cap) {
    resWith =
      items[idx].value +
      knapsackRecursive(items, cap - items[idx].weight, idx + 1)
    cache[idx][cap - items[idx].weight] = resWith
  }

  const resWithout = knapsackRecursive(items, cap, idx + 1)
  cache[idx][cap] = resWithout

  return Math.max(resWith, resWithout)
}

export default knapsackRecursive
/* eslint-enable padding-line-between-statements */
