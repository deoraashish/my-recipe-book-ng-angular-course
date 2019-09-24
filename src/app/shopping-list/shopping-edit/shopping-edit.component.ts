import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editItemIndex: number;
  editListSubscription: Subscription;
  ingredientToBeEdited: Ingredient;
  buttonState: string = 'Add';

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editListSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.ingredientToBeEdited = this.shoppingListService.getIngredientsByIndex(index);
        this.slForm.setValue({
          name: this.ingredientToBeEdited.name,
          amount: this.ingredientToBeEdited.amount});
      });
  }

  onAddOrUpdateItem(form: NgForm) {
    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount);
    if (!this.editMode) {
      this.shoppingListService.onAddItem(newIngredient);
    } else {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
      this.editMode = false;
    }
    form.reset();
  }

  onClearClicked() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteClicked() {
    if (confirm('Are you sure you want to delete this ingredient Item?')) {
      this.shoppingListService.deleteIngredient(this.editItemIndex);
      this.onClearClicked();
    }
  }

  ngOnDestroy() {
    this.editListSubscription.unsubscribe();
  }
}
