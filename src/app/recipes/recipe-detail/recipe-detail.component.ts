import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  id:number;
  constructor(private recipeService: RecipeService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params:Params) =>
    //   {
    //     this.id =+ params['id'];
    //     this.recipeDetail = this.recipeService.getRecipes(this.id);
    //   }
    // );
  }

  removeRecipe() {
    console.log(this.recipeDetail);
    //this.recipeService.delete().subscribe((data:any)=>{});
  }

  buy() {
    this.recipeService.addToShoppingList(this.recipeDetail.ingredient);
  }

  // editRecipe()
  // {
  //   this.router.navigate(['editRecipe'],{relativeTo:this.route});
  // }

}
