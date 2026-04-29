
import { Routes } from '@angular/router';


// Aqui você define todas as rotas do seu app
export const routes: Routes = [
  {
    // Caminho vazio ('') representa a rota principal (ex: localhost:4200/)
    path: '',

    // Carrega um componente de forma dinâmica 
    // Ou seja, só carrega quando o usuário acessa essa rota
    loadComponent: () => import('./models/to-do/to-do').then(m => m.ToDo),

    // Rotas "filhas" (sub-rotas dentro da principal)
    children: [
      {
        // Quando o caminho estiver vazio dentro dessa rota
        path: '',

        // Garante que só funciona quando for exatamente vazio
        pathMatch: 'full',

        // Redireciona automaticamente para 'upcoming'
        redirectTo: 'upcoming'
      },
      {
        // Rota: /behind-schedule
        path: 'behind-schedule',

        // Carrega o componente correspondente de forma dinâmica
        loadComponent: () => import('./models/to-do/behind-schedule/behind-schedule').then(m => m.BehindSchedule)
      },
      {
        // Rota: /completed
        path: 'completed',

        // Carrega o componente correspondente
        loadComponent: () => import('./models/to-do/completed/completed').then(m => m.Completed)
      },
      {
        // Rota: /upcoming
        path: 'upcoming',

        // Carrega o componente correspondente
        loadComponent: () => import('./models/to-do/upcoming/upcoming').then(m => m.Upcoming)
      }
    ]
  }
];


