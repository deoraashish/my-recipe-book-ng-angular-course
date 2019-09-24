import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) {}

  saveDataToServer() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put<Recipe[]>('https://ng-recipe-angular-course.firebaseio.com/recipes.json', recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipesFromServer() {
    return this.http
      .get<Recipe[]>('https://ng-recipe-angular-course.firebaseio.com/recipes.json')
      .pipe(map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredient: recipe.ingredient ? recipe.ingredient : []
          };
        });
      })
      , tap((recipes) => {
        this.recipesService.setRecipes(recipes);
      }));
  }
}
