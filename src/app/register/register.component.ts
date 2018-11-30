import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Form } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerFrm;
  id: string;
  pass: string;
  @ViewChild('myForm') mytemplateForm : NgForm;
  public designation = [
    { id: '1', name: 'Analyst' },
    { id: '2', name: 'Senior Analyst' },
    { id: '3', name: 'Consultant' },
    { id: '4', name: 'Senior Consultant' }
  ];
  constructor(private form: FormBuilder) {
    
  }

  ngOnInit() {
    this.registerFrm = new FormGroup({
      uId: new FormControl(-1, Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      tglBtn: new FormControl(0)
    });

  }
  // onClcik()
  //   {
  //     $('#register').trigger('reset');
  //   }

}
