import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '../components/shared/recipe.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { RecipeBookService } from './recipe-book.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private storageService: StorageService,
    private recipeService: RecipeBookService
  ) {}

  /**
   * The resolve method automatically subscribes to the `fetchRecipes` observable and
   * loads the data before the component is loaded.
   * @param route
   * @param state
   * @returns
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      console.log('Fetching data...');
      return this.storageService.fetchRecipes$();
    }

    return recipes;
  }
}
