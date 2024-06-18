import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../components/shared/ingredient.model';

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
export class ShoppingListService {
  addIngredientEmitter = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 8),
    new Ingredient('Tomato', 5),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredientEmitter.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.addIngredientEmitter.emit(this.ingredients.slice());
  }
}
