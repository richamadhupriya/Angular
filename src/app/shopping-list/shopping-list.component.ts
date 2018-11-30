import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ingredient } from '../shared/ingredients';
import * as $ from 'jquery';
import { ShoppingService } from './shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

   @Input() ingredients: Ingredient[];
  
  
  selectedIngredient:Ingredient;
  constructor(private http:HttpClient, private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    
  }

  onSelect(ingredient)
  {
    this.selectedIngredient = ingredient;
  }

  

   deleteIngredient(ingredient)
   {
     if(this.ingredients.includes(ingredient)==true)
     {
       let index = this.ingredients.indexOf(ingredient);
       this.ingredients.splice(index,1);
       delete(this.selectedIngredient)
       console.log(this.ingredients)

     }
     
   }

   applyChanges()
   {
     let IName= document.forms["editForm"]["name"].value;
     let IAmount= document.forms["editForm"]["amount"].value;
     this.selectedIngredient.name = IName;
     this.selectedIngredient.amount = IAmount;
      
     
   }
   

  // cancel() {
  //   $(".close").click(function () {
  //     $(this).parentsUntil('#ex').hide();
  //   });
  // }
}
