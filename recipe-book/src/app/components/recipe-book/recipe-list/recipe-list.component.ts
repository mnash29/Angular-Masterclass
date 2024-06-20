import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];

  private subscriptions = new Subscription();

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    // Subscription to event emitted when recipe detail is changed
    this.subscriptions.add(
      this.recipeService.recipeChanged$.subscribe((recipes) => {
        this.recipes = recipes;
      })
    );
  }

  ngOnDestroy(): void {
    console.log('RecipeListComponent.subscriptions.unsubscribe()')
    this.subscriptions.unsubscribe();
  }
}
