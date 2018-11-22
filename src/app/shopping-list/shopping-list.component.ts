import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredients';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() ingredients: Ingredient[] =[
    new Ingredient('Coconut','13'),
    new Ingredient('Sugar','1kg'),
    new Ingredient('Butter','300gm')
  ];
  selectedIngredient:Ingredient;
  constructor() { }

  ngOnInit() {
  }

  onSelect(ingredient)
  {
    this.selectedIngredient = ingredient;
    
  }

  addNewIngredient(ingredient:Ingredient)
   {
    this.ingredients.push(ingredient)
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
}
