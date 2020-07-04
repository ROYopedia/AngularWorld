import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe of chiken Meal', 'This is simple chicken meal',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [new Ingredient('Meat', 1),new Ingredient('Sweet', 10)]
         ),
        new Recipe('Another Test Recipe of burger', 'This is a burger',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [new Ingredient('Buns', 2),new Ingredient('meat', 5)]
         )
    ];
    getRecipeDetails(){
        return this.recipes.slice()
    }
} 