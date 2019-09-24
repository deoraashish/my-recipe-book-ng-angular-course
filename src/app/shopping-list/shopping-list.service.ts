import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService {

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChangedSubject = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredientsByIndex(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }

  onAddItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }

  onAddItemArray(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }

}
