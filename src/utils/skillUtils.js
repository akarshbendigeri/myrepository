export function countSkillsByCategory(categories) {
  return categories.reduce((counts, category) => {
    counts[category.name] = category.skills.length
    return counts
  }, {})
}