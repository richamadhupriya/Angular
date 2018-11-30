import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditShoppingListComponent } from './shopping-list/edit-shopping-list/edit-shopping-list.component';

import { ManageDirective } from './shared/manage.directive'

import { ShoppingService } from './shopping-list/shopping.service';
import { SingleRecipeComponent } from './recipes/single-recipe/single-recipe.component';
import { EditIngredientComponent } from './shopping-list/edit-ingredient/edit-ingredient.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

import {AxisComponentsAllModule} from 'axis-components/components/components.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    EditShoppingListComponent,
    ManageDirective,
    SingleRecipeComponent,
    EditIngredientComponent,
    EditRecipeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AxisComponentsAllModule 
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
