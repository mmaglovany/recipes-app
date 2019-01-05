import processRecipes, { bestBeforeNotPassedCount } from '../../../src/utils/process-recipes';

describe('processRecipes utility', () => {
  it('should return an empty array', () => {
    const result = processRecipes([], []);
    expect(result.length).toBe(0);
  });

  it('should return an array with the single element', () => {
    const dummyIngredients = [
      { title: 'Cheese', bestBeforePassed: false },
      { title: 'Bread', bestBeforePassed: false }
    ];
    const dummyRecipes = [ { title: 'Bread With Cheese', ingredients: [ 'Bread', 'Cheese' ] } ];
    const result = processRecipes(dummyRecipes, dummyIngredients);
    expect(result.length).toBe(1);
  });

  it('should return no recipes', () => {
    const dummyIngredients = [ { title: 'Cheese', bestBeforePassed: false } ];
    const dummyRecipes = [ { title: 'Bread With Cheese', ingredients: [ 'Bread', 'Cheese' ] } ];
    const result = processRecipes(dummyRecipes, dummyIngredients);
    expect(result.length).toBe(0);
  });

  it('should return a right count', () => {
    const dummyIngredients = [{ bestBeforePassed: true }, { bestBeforePassed: false }, { bestBeforePassed: false }];
    const result = bestBeforeNotPassedCount(dummyIngredients);
    expect(result).toBe(2);
  });
});
