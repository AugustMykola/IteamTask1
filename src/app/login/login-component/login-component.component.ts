import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.less']
})
export class LoginComponentComponent implements OnInit {

  loginForm! : FormGroup;

  constructor(
      private authService: AuthService,
      private router: Router
  ) {
  this._createForm()

  }

  ngOnInit(): void{}

  private _createForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required ]),
      password: new FormControl('',[Validators.required ])
    })
  }

  checkForLength(control: FormControl){
      if(control.value.length <= 8){
        return {
          'lengthError':true
        };
      }
      return null
  }

  login(){
    const value = this.loginForm.value;
    if(value.email && value.password) {
      this.authService.login(value.email, value.password)
        .subscribe((res:any)=>{
          this.router.navigateByUrl('userassesments');
          localStorage.setItem('token', res.token)
          localStorage.setItem('role',res.role)
        })
    }
  }
}
