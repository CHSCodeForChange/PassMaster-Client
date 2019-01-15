import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class StudentGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('user_type') == '1') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
