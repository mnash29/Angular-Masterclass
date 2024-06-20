import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeBookService } from 'src/app/services/recipe-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeId: number;

  private subscriptions = new Subscription();

  constructor(
    private recipeService: RecipeBookService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Subscription for router params
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
        // Cast param string to number using the `+` operator
        this.recipeId = +params.id;
        this.recipe = this.recipeService.getRecipe(this.recipeId);
      })
    );

    // Subscription for recipe detail changed
    this.subscriptions.add(
      this.recipeService.recipeChangedSubject.subscribe((recipes) => {
        this.recipe = recipes[this.recipeId];
      })
    );
  }

  ngOnDestroy(): void {
    console.log('RecipeDetailComponent.subscriptions.unsubscribe()');
    this.subscriptions.unsubscribe();
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients.slice());
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
