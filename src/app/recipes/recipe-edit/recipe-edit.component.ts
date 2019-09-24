import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  form: FormGroup;
  constructor(private route: ActivatedRoute,
              private route2: Router,
              private recipeService: RecipeService) { }
  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      });
  }

  onCancelClicked() {
    this.route2.navigate(['../'], {relativeTo: this.route});
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredient) {
        for (const ingredient of recipe.ingredient) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern('')
            ])
          }));
        }
      }
    }

    this.form = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.form.value['name'],
      this.form.value['description'],
      this.form.value['imagePath'],
      this.form.value['ingredients']);
    if (this.editMode) {
      this.recipeService.onRecipeUpdate(this.id, newRecipe);
    } else {
      this.recipeService.onRecipeAdd(newRecipe);
    }
    this.onCancelClicked();
  }

  getControls() {
    return ( this.form.get('ingredients') as FormArray).controls;
  }

  onDeleteClicked(index: number) {
    (this.form.get('ingredients') as FormArray).removeAt(index);
  }

  onIngredientAdd() {
    (this.form.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern('')
        ])
      })
    );
  }
}
