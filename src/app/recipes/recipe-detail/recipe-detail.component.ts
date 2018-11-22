import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipeDetail:Recipe;
  constructor() { }

  ngOnInit() {
  }

  removeRecipe()
   {
     console.log(this.recipeDetail)
     
   }

}
