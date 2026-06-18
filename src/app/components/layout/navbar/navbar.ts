import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  readonly navigationItems = [
    { label: 'Inicio', target: 'inicio' },
    { label: 'Soluciones', target: 'soluciones' },
    { label: 'Tecnología', target: 'Tecnología' },
    { label: 'Contacto', target: 'contacto' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
