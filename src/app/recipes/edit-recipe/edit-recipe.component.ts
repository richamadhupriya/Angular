import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  id: number;
  willEdit = false;
  addRecipeFrm:FormGroup;
  ingredients: FormArray;
 
  constructor(private route: ActivatedRoute) { }

 
  ngOnInit() {
    //const id= this.route.params.map(p => p.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.willEdit = params['id'] != null;
      }
    );

    
    this.addRecipeFrm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9 ]+')
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z ]+')
      ])),
      imagePath: new FormControl('', Validators.compose([
        Validators.required
      ])),
      ingredient:this.ingredients,
      // ingredient: new FormControl(ingredients, Validators.compose([
      //   Validators.required,
      //   Validators.pattern('[A-Za-z ]+')
      // ])),
      amount: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9 ]+')
      ]))
    });

  }

  private initForm()
  {

  }

  reset()
  {
    this.addRecipeFrm.reset();
  }

}
