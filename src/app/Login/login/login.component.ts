import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder){

    this.loginForm = this.fb.group({

      user: new FormControl(null, {validators:[Validators.required]}),
      password: new FormControl(null, {validators:[Validators.required]})

    });
  }


}
