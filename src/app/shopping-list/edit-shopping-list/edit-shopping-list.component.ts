import { Component, OnInit, ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients';


@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(event:any)
  {
    let name = event.target.elements[0].value;
    let amount= event.target.elements[1].value;
    
    let addedIngredient = new Ingredient(name,amount);
    this.newIngredient.emit(addedIngredient);
  
  }

  

}
