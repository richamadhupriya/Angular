import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @ViewChild('nameRecipe') nameRecipe;

  /*recipes: Recipe[] = [
    new Recipe('Sweet', 'Desert', 'https://i.pinimg.com/originals/e3/a9/ab/e3a9abdbf66d0ef9650b36eb9687c85d.png')
  ];*/

  recipes: any = [];

  recipeData: Recipe[] = [];
  constructor(private recipeService: RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    //this.http.get('../../assets/recipes.json').subscribe(data => { this.recipes = data as string[]; });

    this.recipes = this.recipeService.getRecipes();
  }

  createNewRecipe(){
    this.router.navigate(['newRecipe'],{ relativeTo:this.route});
  }



  // addRecipe(event: any) {
  //   let name = event.target.elements[0].value;
  //   let description = event.target.elements[1].value;
  //   let image = event.target.elements[2].value;
    

  //   let newRecipe = new Recipe(name,description,image);

  //   this.recipeService.addRecipe(newRecipe)

  //   event.target.reset();
  // }

  

}
