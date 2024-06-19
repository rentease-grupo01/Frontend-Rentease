import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUsuarioService } from 'src/app/Servicios/auth-usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';
  menuOpen: any;

  constructor(private authService: AuthUsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedInObservable().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.getUserNameObservable().subscribe(userName => {
      this.userName = userName;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
