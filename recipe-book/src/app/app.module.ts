import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './components/shared/dropdown.directive';
import { RecipeEditComponent } from './components/recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
