import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router:Router){

    this.loginForm = this.fb.group({

      user: new FormControl(null, {validators:[Validators.required]}),
      password: new FormControl(null, {validators:[Validators.required]})

    });

  }
  public login(): void{
    this.router.navigate(['home']);
  }


}
