import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipe-book/recipe-edit/recipe-edit.component';

/**
 *  Path: The router API breaks down the entire URL into individual fragments. The path property
 *  could correspond to a combination of these fragments. It is mainly used to identify the angular
 *  component that should be instantiated and loaded in the parent's router outlet.
 *
 *  Component: This property refers to the angular component that should instantiate for this route.
 *
 *  Children: This property defines nested routes, and angular would load them upfront. Ideal for simple
 *  nested routing (children < 3).
 *
 *  LoadChildren: It is also used to define nested routes, but Angular Router would lazily load them
 *  optimizing your application's performance by only loading the nested route subtree when a user
 *  navigates to a particular URL that matches the current route path..
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
