import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ingredient } from '../shared/ingredients';
import {Subject} from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  // ingredientsUpdated = new EventEmitter<Ingredient[]>();
  
  ingredientsUpdated = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] =[
    new Ingredient('Cocoa','13gm'),
    new Ingredient('Sugar','1kg')
  ];
  constructor(private http:HttpClient) { }
 
  getIngredients()
  {
    return this.ingredients;
  }

  addIngredient(ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
  }

  importIngredients(ingredient:Ingredient[])
  {
    this.ingredients.push(...ingredient);
    this.ingredientsUpdated.next(this.ingredients);
  }
}
