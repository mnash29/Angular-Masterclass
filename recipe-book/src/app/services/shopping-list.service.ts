import { Injectable } from '@angular/core';
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
export class ShoppingListService {
  addIngredient$ = new Subject<Ingredient[]>();
  deleteIngredient$ = new Subject<Ingredient[]>();
  startedEditing$ = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 8),
    new Ingredient('Tomato', 5),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  /**
   * Emits an event when a single ingredient is added to the shopping-list
   * @param ingredient 
   */
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredient$.next(this.ingredients.slice());
  }

  /**
   * Emits an event when a list of ingredients are added to the shopping-list
   * @param ingredients 
   */
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.addIngredient$.next(this.ingredients.slice());
  }

  /**
   * Emits an event when an ingredient is updated  in the shopping-list
   * @param index 
   * @param newIngredient 
   */
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.addIngredient$.next(this.ingredients.slice());
  }

  /**
   * Emits an event when an ingredient is deleted from the shopping-list
   * @param index
   */
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.deleteIngredient$.next(this.ingredients.slice());
  }
}
