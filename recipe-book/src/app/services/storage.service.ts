import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeBookService } from './recipe-book.service';
import { Recipe } from '../components/shared/recipe.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeBookService
  ) {}

  setRecipes;
  /**
   * Store recipes using Firebase Realtime Database reference URL
   */
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put<Recipe[]>(
        'https://recipe-book-ng-cac79-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  /**
   * Fetches recipes from Firebase Realtime Database using reference URL and pipes
   * the recipes to the map function which initializes an empty ingredients array
   * if missing from recipe data
   * 
   * the `tap` operator allows us to execute code without altering the data passed through
   */
  fetchRecipes$() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-ng-cac79-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
