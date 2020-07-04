import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit() {
  }
  toShopList(){
    console.log("Recipe"+this.recipe);
    this.shoppinglistservice.addIngredients(this.recipe.ingredients)
    // this.recipe.ingredients.forEach(ingredient => {
    //   this.shoppinglistservice.onIngredientAdded(ingredient)
    // });
  }

}
