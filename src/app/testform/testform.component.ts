import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  genders = ['male', 'female']
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  // onValuesHobby() {
  //   this.signUpForm.setValue({
  //     'userData': {
  //       'username': 'max',
  //       'email': 'max@test.com'
  //     },
  //     'gender': 'female',
  //     'hobbies': []
  //   });
  // }
}
