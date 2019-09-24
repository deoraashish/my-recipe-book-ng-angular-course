import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeSubscription = new Subscription();
  constructor(private recipeService: RecipeService,
              private route: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipeSubject.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.route.navigate(['new'], {relativeTo: this.activeRoute});
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }

}
