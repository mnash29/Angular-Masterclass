import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;

  private subscriptions = new Subscription();

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      })
    );
  }

  ngOnDestroy(): void {
    console.log("RecipeBookComponent.subscriptions.unsubscribe()");
    this.subscriptions.unsubscribe();
  }
}
