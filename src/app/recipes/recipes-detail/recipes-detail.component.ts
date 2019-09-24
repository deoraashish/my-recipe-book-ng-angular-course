import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() receivedRecipeFromParent: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private route2: Router) {}

  ngOnInit() {
    // this.recipeService.recipeEmitted.subscribe(
    //   (recipeRecived: Recipe) => this.receivedRecipeFromParent = recipeRecived
    // );
    this.route.params.subscribe(
      (params: Params) => {
        this.receivedRecipeFromParent = this.recipeService.getRecipeById(+params.id);
        this.id = +params.id;
      }
    );
  }

  addToShoppingList() {
    this.recipeService.onIngredientAddFromRecipe(this.receivedRecipeFromParent.ingredient);
  }

  onDeleteClicked() {
    if (confirm('Are you sure you want to delete this recipe? You wont be able to retreive it later')) {
      this.recipeService.deleteRecipeByID(this.id);
      this.route2.navigate(['../'], {relativeTo: this.route});
    }
  }
}
