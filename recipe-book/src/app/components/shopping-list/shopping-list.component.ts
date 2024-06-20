import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  private subscriptions = new Subscription();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    // Subscription to event emitted when ingredient is added to shopping-list
    this.subscriptions.add(
      this.shoppingListService.addIngredient$.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
    );

    // Subscription to event emitted when an ingredient is deleted from shopping-list
    this.subscriptions.add(
      this.shoppingListService.deleteIngredient$.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
    )
  }

  ngOnDestroy(): void {
    console.log('ShoppingListComponent.subscriptions.unsubscribe()');
    this.subscriptions.unsubscribe();
  }

  /**
   * Emits an event when an ingredient is click in the shopping-list
   * @param index 
   */
  onEditIngredient(index: number) {
    this.shoppingListService.startedEditing$.next(index);
  }
}
