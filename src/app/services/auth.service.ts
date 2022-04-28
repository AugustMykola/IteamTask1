import { Injectable } from '@angular/core';
import { User } from '../shared/IUser';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = environment
  constructor(private http: HttpClient) {
  }

  login(email:string, password:string ) {
    return this.http.post<User>(`${this.path.path}/api/login`, {email, password})
  }


}
