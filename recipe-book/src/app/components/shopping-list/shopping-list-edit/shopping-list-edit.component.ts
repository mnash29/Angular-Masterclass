import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // Removed in favor of ngForm
  // @ViewChild('nameInput', { static: false }) nameInput: ElementRef;

  // @ViewChild('amountInput', { static: false }) amountInput: ElementRef;

  @ViewChild('f', { static: false }) form: NgForm;

  editMode = false;
  editIngredientIndex: number;
  editIngredient: Ingredient;

  private subscriptions = new Subscription();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.shoppingListService.startedEditing.subscribe((index) => {
        this.editMode = true;
        this.editIngredientIndex = index;
        this.editIngredient = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount,
        });
      })
    );
  }

  ngOnDestroy(): void {
    console.log('ShoppingListEditComponent.subscriptions.unsubscribe()');
    this.subscriptions.unsubscribe();
  }

  onIngredientSubmit(form: NgForm) {
    // this.shoppingListService.addIngredient({
    //   name: this.nameInput.nativeElement.value,
    //   amount: this.amountInput.nativeElement.value,
    // });
    const newIngredient = new Ingredient(form.value.name, form.value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIngredientIndex, newIngredient)
    }
    else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    
    this.onResetForm();
  }

  onIngredientDelete() {
    this.shoppingListService.deleteIngredient(this.editIngredientIndex);
    this.onResetForm();
  }

  onResetForm() {
    this.form.reset();
    this.editMode = false;
  }
}
