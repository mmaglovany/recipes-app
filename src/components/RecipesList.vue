<template>
	<div class="recipes-list">
    <div v-if="recipesExist">
      <h2>Today you can cook the following dishes:</h2>
      <ul>
        <li v-for="recipe in availableRecipes">
          {{recipe.title}}
        </li>
      </ul>
    </div>
    <div v-else>No recipes</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';

  import processRecipes from '@/utils/process-recipes';
	import processIngredients from '@/utils/process-ingredients'

	@Component
	export default class RecipesList extends Vue {
	  @Prop() private ingredients!: Array<any>;
	  @Prop() private recipes!: Array<any>;

	  get availableRecipes() {
	    return processRecipes(
        this.recipes,
        processIngredients(this.ingredients)
      );
    }

    get recipesExist() {
	    return !!this.availableRecipes.length;
    }
  }
</script>

<style scoped lang="scss">
  .recipes-list {
    padding: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 23px;
  }
</style>
