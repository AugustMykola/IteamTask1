import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

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
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required , this.checkForLength])
    })
  }

  checkForLength(control: FormControl){
      if(control.value.length <= 4){
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
          this.authService.setRole(res.role)
          this.authService.setToken( res.token)
        })
    }
  }
}
