import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ `
    .login-form {
      max-width: 300px;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  `
  ]
})
export class AppComponent implements OnInit {
  validateForm: FormGroup;
  submitForm(): void {
    this.validateForm.disable();
    setTimeout(() => {
      console.log(this.validateForm);
      this.validateForm.enable();
    }, 2000);
    // for (const i in this.validateForm.controls) {
    //   console.log(i);
    //   this.validateForm.controls[ i ].markAsDirty();
    //   this.validateForm.controls[ i ].updateValueAndValidity();
    // }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
}
