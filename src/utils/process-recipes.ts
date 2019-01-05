export default function (recipes: Array<any>, ingredients: Array<any>): Array<any> {
  return recipes
    .map((recipe) => {
      const recipeIngredients = recipe.ingredients.map((recipeIng: any) => ingredients.find((ing: any) => ing.title === recipeIng) || null);

      return {
        ...recipe,
        ingredients: recipeIngredients,
      }
    })
    .filter((recipe: any) => {
      return recipe.ingredients.every((recipeIng: any) => !!recipeIng)
    })
    .sort((a, b) => {
      return bestBeforeNotPassedCount(b.ingredients) - bestBeforeNotPassedCount(a.ingredients);
    });
}

export function bestBeforeNotPassedCount(ingredients: any): number {
  return ingredients.filter((ingredient: any) => !ingredient.bestBeforePassed).length;
}