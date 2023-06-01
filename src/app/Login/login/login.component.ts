import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { AuthService } from 'src/app/Services/auth.service';
import { lastValueFrom } from 'rxjs'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router:Router,
              private authService: AuthService){

    this.loginForm = this.fb.group({

      username: new FormControl(null, {validators:[Validators.required]}),
      password: new FormControl(null, {validators:[Validators.required]})

    });

  }
  public login(): void{

    let login = this.loginForm.value as Login;

    lastValueFrom(this.authService.auth(login)).then(response =>{
      if(response.success){
        localStorage.setItem("token",response.data);
        this.router.navigate(['home']);
      } else{
        Swal.fire({
          text: response.message,
          icon:'error',
        });
      }
    }).catch(error =>{
      console.log(error);
    })

  }


}
