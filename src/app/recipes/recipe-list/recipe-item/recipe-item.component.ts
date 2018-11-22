import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem:Recipe;
  @Output() recipeClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  getRecipe()
  {
    this.recipeClicked.emit();
  }

}
