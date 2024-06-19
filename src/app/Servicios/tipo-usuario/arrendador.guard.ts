import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUsuarioService } from '../auth-usuario.service';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorGuard implements CanActivate {

  constructor(private authService: AuthUsuarioService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentRole = this.authService.getCurrentUserRole();

    if (this.authService.isLoggedIn() && currentRole === 'ARRENDADOR') {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
