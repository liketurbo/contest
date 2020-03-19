const knapsackRecursive = (
  items: { weight: number; value: number }[],
  cap: number,
  idx = 0
): number => {
  if (idx > items.length - 1 || cap === 0) return 0
  else if (items[idx].weight <= cap) {
    const resWith =
      items[idx].value +
      knapsackRecursive(items, cap - items[idx].weight, idx + 1)
    const resWithout = knapsackRecursive(items, cap, idx + 1)

    return Math.max(resWith, resWithout)
  }

  return knapsackRecursive(items, cap, idx + 1)
}

export default knapsackRecursive
