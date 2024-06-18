import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') recipe: Recipe;
  @Input() recipeId: number;

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit(): void {}

  onRecipeSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
