import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredients';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeClicked = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A', 'Sample recipe 1', 'https://i.pinimg.com/originals/e3/a9/ab/e3a9abdbf66d0ef9650b36eb9687c85d.png',
      [
        new Ingredient('C', '100gm'),
        new Ingredient('D', '1kg')
      ]),

      new Recipe('B', 'Sample recipe 2', 'https://i.pinimg.com/originals/e3/a9/ab/e3a9abdbf66d0ef9650b36eb9687c85d.png',
      [
        new Ingredient('E', '100gm'),
        new Ingredient('F', '1kg')
      ])
  ]
  constructor(private shoppingService: ShoppingService) { }

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
  }

  addToShoppingList(ingredient: Ingredient[]) {
    this.shoppingService.importIngredients(ingredient);
  }


  // add(name:string,description:string,imageUrl:string):Observable<any>{

  //   return this.http.post('http://localhost:4210/addRecipe',{
  //     name:name,
  //     description:description,
  //     imageUrl:imageUrl
  //   });
  // }

  // delete():Observable<any>{

  //   return this.http.post('http://localhost:4210/delete',
  //   {

  //   });
  // }



}
