import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import {SingleRecipeComponent} from './recipes/single-recipe/single-recipe.component';
import {EditIngredientComponent} from './shopping-list/edit-ingredient/edit-ingredient.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingListComponent,
    children:[
      {
        path:'',
        component:EditIngredientComponent
      }
    ]
    
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children:[
      {
        path:'',
        component:SingleRecipeComponent
      },
      {
        path:'newRecipe',
        component: EditRecipeComponent
      },
      {
        path:':id',
        component:RecipeDetailComponent
      }

    ]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'',
    redirectTo: '/shopping',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
