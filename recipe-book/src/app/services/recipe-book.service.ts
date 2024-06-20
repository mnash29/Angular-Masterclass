import { Injectable } from '@angular/core';
import { Recipe } from '../components/shared/recipe.model';
import { Ingredient } from '../components/shared/ingredient.model';
import { Subject } from 'rxjs';

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
  recipeSelected$ = new Subject<Recipe>();
  recipeChanged$ = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test Recipe',
  //     'This is a test',
  //     'https://cdn.loveandlemons.com/wp-content/uploads/2019/06/homemade-pizza.jpg',
  //     [
  //       new Ingredient('Flour', 5),
  //       new Ingredient('Tomato', 2),
  //       new Ingredient('Marinara', 1),
  //       new Ingredient('Mozzarella', 1),
  //     ]
  //   ),
  //   new Recipe(
  //     'Test Recipe #2',
  //     'This is the second test',
  //     'https://sallysbakingaddiction.com/wp-content/uploads/2015/04/homemade-basil-pesto-2.jpg',
  //     [
  //       new Ingredient('Parsley', 1),
  //       new Ingredient('Olive Oil', 1),
  //       new Ingredient('Garlic', 1),
  //       new Ingredient('Pine Nuts', 1),
  //     ]
  //   ),
  // ];

  constructor() {}

  getRecipes() {
    // Returns a copy of the `recipes` array
    return this.recipes.slice();
  }

  getRecipe(recipeId: number) {
    return this.recipes[recipeId]
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.notifyOnChange();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.notifyOnChange();
  }
  
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.notifyOnChange();
  }
  
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.notifyOnChange();
  }
  
  notifyOnChange() {
    this.recipeChanged$.next(this.recipes.slice());
  }
}
