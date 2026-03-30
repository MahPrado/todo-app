
import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';

import { HeaderButton } from './header-button/header-button';

// Define que essa classe é um componente Angular
@Component({
  selector: 'app-header',
  imports: [HeaderButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  // Injeta o serviço de rotas do Angular para permitir navegação
  router = inject(Router);

  // Lista de páginas que vão aparecer no header (menu)
  pages = [
    { name: 'Behind Schedule', route: '/behind-schedule'}, // nome + rota
    { name: 'Upcoming', route: '/upcoming'},
    { name: 'Completed', route: '/completed'},
  ];

  // Função que será chamada para navegar entre páginas
  redirectTo(route: string) {
    // Usa o Angular Router para ir até a rota informada
    this.router.navigate([route]);
  }
}