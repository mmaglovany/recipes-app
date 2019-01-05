import processIngredients from '@/utils/process-ingredients';

describe('processIngredients utility', () => {
  it('should return an empty array', () => {
    const result = processIngredients([]);
    expect(result.length).toBe(0);
  });

  it('should return an array with 2 elements inside', () => {
    const dummyIngredients = [
      { title: 'Ham', 'best-before': '2029-01-09', 'use-by': '2029-01-14'},
      { title: 'Cheese', 'best-before': '2029-01-09', 'use-by': '2029-01-14' },
      { title: 'Bread', 'best-before': '2009-01-09', 'use-by': '2009-01-14' },
      { title: 'Butter', 'best-before': '2009-01-09', 'use-by': '2009-01-14' },
    ];
    const result = processIngredients(dummyIngredients);
    expect(result.length).toBe(2);
  });

  it('should return an array, single element of which will have the \'bestBeforePassed\' flag (true)', () => {
    const dummyIngredients = [
      { title: 'Ham', 'best-before': '2009-01-09', 'use-by': '2029-01-14'},
    ];
    const result = processIngredients(dummyIngredients);
    expect(result[0].bestBeforePassed).toBe(true);
  });

  it('should return an array, single element of which will have the \'bestBeforePassed\' flag (false)', () => {
    const dummyIngredients = [
      { title: 'Ham', 'best-before': '2029-01-09', 'use-by': '2029-01-14'},
    ];
    const result = processIngredients(dummyIngredients);
    expect(result[0].bestBeforePassed).toBe(false);
  });
});
