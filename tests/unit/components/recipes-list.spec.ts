import { shallowMount } from "@vue/test-utils";
import RecipesList from "@/components/RecipesList.vue";

describe("RecipesList.vue", () => {
  it('should render a list with recipes', () => {
    const dishTitle = 'Bread With Cheese';
    const dummyIngredients = [
      { title: 'Cheese', 'best-before': '2029-11-21', 'use-by': '2029-11-24' },
      { title: 'Bread', 'best-before': '2029-11-21', 'use-by': '2029-11-24' }
    ];
    const dummyRecipes = [ { title: dishTitle, ingredients: [ 'Bread', 'Cheese' ] } ];
    const wrapper = shallowMount(RecipesList, {
      propsData: {
        ingredients: dummyIngredients,
        recipes: dummyRecipes,
      }
    });

    expect(wrapper.find('ul li').text()).toMatch(dishTitle);
  });

  it('renders button with the text \'What’s for lunch\' initially', () => {
    const dummyIngredients = [
      { title: 'Cheese', 'best-before': '2009-11-21', 'use-by': '2009-11-24' },
      { title: 'Bread', 'best-before': '2029-11-21', 'use-by': '2029-11-24' }
    ];
    const dummyRecipes = [ { title: 'Bread With Cheese', ingredients: [ 'Bread', 'Cheese' ] } ];
    const wrapper = shallowMount(RecipesList, {
      propsData: {
        ingredients: dummyIngredients,
        recipes: dummyRecipes,
      }
    });

    expect(wrapper.find('div').text()).toMatch('No recipes');
  });
});