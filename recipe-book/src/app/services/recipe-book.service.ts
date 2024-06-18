import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../components/shared/recipe.model';

/**
 * Using the `providedIn` property we can lazy load the service anywhere needed
 * but the Angular compiler will only include it in the bundles its used in. If the
 * service is unused across all components its excluded from the entire package.
 *
 * Always use `providenIn` for all singleton services. If we want multiple instances
 * of the same service, we must set the `providedIn` property to `undefined` (or remove it)
 * and provide the service inside the Component `providers` array.
 */
@Injectable({
  providedIn: 'root',
})
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://cdn.loveandlemons.com/wp-content/uploads/2019/06/homemade-pizza.jpg'
    ),
    new Recipe(
      'Test Recipe #2',
      'This is the second test',
      'https://sallysbakingaddiction.com/wp-content/uploads/2015/04/homemade-basil-pesto-2.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    // Returns a copy of the `recipes` array
    return this.recipes.slice();
  }
}
