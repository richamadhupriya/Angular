import { Component, OnInit, ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients';
import { ShoppingService } from 'src/app/shopping-list/shopping.service'
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  
  // @Output() newIngredient = new EventEmitter<Ingredient>();
  addIngredientFrm;

  @ViewChild('addIngredientForm') addIngredientForm: NgForm;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.addIngredientFrm = new FormGroup({
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9 ]+')
        ])),
      amount: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9 ]+')
        ]))
    });
  }

  addIngredient(event)
  {
    let name = event.target.elements[0].value;
    let amount= event.target.elements[1].value;

    let addedIngredient = new Ingredient(name,amount);
    
    this.shoppingService.addIngredient(addedIngredient);
    event.target.reset();
  
  }

  reset()
  {
    this.addIngredientFrm.reset();
  }
  

}
