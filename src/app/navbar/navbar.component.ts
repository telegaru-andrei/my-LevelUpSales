import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class NavbarComponent {
gotoGames() {
throw new Error('Method not implemented.');
}


  constructor(private router: Router) { }

  gotoUsers() {
    this.router.navigate(['users']);
  }
  gotoItems() {
    this.router.navigate(['games']);
  }
  gotoCreateItem(){
    this.router.navigate(['add-game'])
  }
    goToLogin(){
      this.router.navigate(['login']);
    }
  }
