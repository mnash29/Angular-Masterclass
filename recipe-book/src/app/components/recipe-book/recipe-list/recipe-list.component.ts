import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
