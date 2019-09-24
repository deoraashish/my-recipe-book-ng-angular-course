import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSubject = new Subject<Recipe[]>();
  // selectedRecipe: Recipe = null;

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'This is simply a test',
  //     'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg',
  //     [
  //       new Ingredient('Banana', 22),
  //       new Ingredient('Apple', 33)
  //     ]),
  //   new Recipe(
  //     'Second Test Recipe',
  //     'This is another description',
  //     'https://img.bestrecipes.com.au/zrKSgk0i/w643-h428-cfill-q90/br/2019/02/one-pot-french-chicken-recipe-524441-1.jpg',
  //     [
  //       new Ingredient('Ginger', 8),
  //       new Ingredient('Garlic', 9)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  // recipeEmitted = new EventEmitter<Recipe>();

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeSubject.next(this.recipes.slice());
  }

  getRecipes() {
      return this.recipes;
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }
  onIngredientAddFromRecipe(ingredient: Ingredient[]) {
    this.shoppingListService.onAddItemArray(ingredient);
  }
  onRecipeUpdate(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeSubject.next(this.recipes.slice());
  }
  onRecipeAdd(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeSubject.next(this.recipes.slice());
  }
  deleteRecipeByID(id: number) {
    this.recipes.splice(id, 1);
    this.recipeSubject.next(this.recipes.slice());
  }
}
