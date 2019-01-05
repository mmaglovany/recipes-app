<template>
  <div id="app">
    <button
      v-if="!showRecipes"
      id="show-recipes-btn"
      @click="toggleRecipes"
    >
      What’s for lunch
    </button>
    <recipes-list
      v-else="showRecipes"
      :ingredients="ingredients"
      :recipes="recipes"
    ></recipes-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipesList from './components/RecipesList.vue';

import recipesJSON from './assets/recipes.json';
import ingredientsJSON from './assets/ingredients.json';

@Component({
  components: {
    RecipesList
  }
})

export default class App extends Vue {
  showRecipes = false;
  ingredients = ingredientsJSON.ingredients;
  recipes = recipesJSON.recipes;

  toggleRecipes() {
    this.showRecipes = !this.showRecipes;
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
