import { Injectable } from '@angular/core';
import { User } from '../../models/IUser';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  path = environment
  constructor(private http: HttpClient) {
  }

  login(email:string, password:string) {
    return this.http.post<User>(`${this.path.path}/api/login`, {email, password});
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
    localStorage.clear()
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('token');
    if (loggedIn !== null) {
      this.isLogin = true;
    }else {
      this.isLogin = false
    }
    return this.isLogin
  };

  setToken(token: any) {
    localStorage.setItem('token', token)
  };

  setRole(role: any){
    localStorage.setItem('role', role)
  };

  getRole(){
   const role = localStorage.getItem('role');
   return role
  };

}
