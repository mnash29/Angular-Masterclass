import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  ngOnInit(): void {}

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
