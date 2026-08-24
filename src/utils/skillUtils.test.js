import { countSkillsByCategory } from './skillUtils'

// describe groups tests for the same function or feature.
describe('countSkillsByCategory', () => {
  // test describes one expected behavior.
  test('returns the number of skills in each category', () => {
    const categories = [
      { name: 'Frontend', skills: ['React.js', 'Redux', 'TypeScript'] },
      { name: 'Cloud', skills: ['Azure', 'Key Vault'] },
    ]

    // Call the function with known input.
    const result = countSkillsByCategory(categories)

    // expect(result).toEqual(...) checks that the complete object matches.
    expect(result).toEqual({
      Frontend: 3,
      Cloud: 2,
    })
  })

  test('returns an empty object when there are no categories', () => {
    expect(countSkillsByCategory([])).toEqual({})
  })

  test('handles a category with no skills', () => {
    expect(countSkillsByCategory([{ name: 'Other', skills: [] }])).toEqual({
      Other: 0,
    })
  })
})