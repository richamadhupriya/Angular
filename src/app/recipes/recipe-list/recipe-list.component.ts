import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //i:number;
  @Output() recipeChosen = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Sweet', 'Desert', 'https://i.pinimg.com/236x/69/d0/d1/69d0d1a3b7fee3b1a88f64e20da5681e--sweets-clipart-cupcake-clipart.jpg')
  ];
  recipeData: Recipe[]=[];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  addRecipe(event: any) {
    let name = event.target.elements[0].value;
    let description = event.target.elements[1].value;
    let image = event.target.elements[2].value;

    let newRecipe = new Recipe(name, description, image);
    this.recipes.push(newRecipe);
    event.target.reset();
  }

  // getRecipeDetails(recipe) {
  //  this.recipeData.push(recipe);
  //   console.log(recipe.name)
  //   console.log( this.recipeData)
  //   this.router.navigateByUrl('/recipes/details')
  // }

  getRecipeDetails(recipe:Recipe)
  {
    this.recipeChosen.emit(recipe);
  }

}
