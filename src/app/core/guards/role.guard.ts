import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    const role = this.authService.getRole();
    if (role === 'Admin'){
      return true
    }else {
      alert("Нету прав доступа к компоненту");
      this.router.navigate(['/userassesments'])
      return false
    }
  };

}
