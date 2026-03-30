
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header-button',
  standalone:true,
  imports: [],
  templateUrl: './header-button.html',
  styleUrl: './header-button.scss',
})
export class HeaderButton {

   // Recebe um texto vindo do componente pai (Header)
  @Input() btnText!: string;
  
  // Recebe um valor true/false para saber se o botão está ativo
  // Começa como false por padrão
  @Input() isActive: boolean = false;

  
  // Cria um evento que será enviado para o componente pai, que não envia nenhum dado junto
  @Output() redirectRouteEvent = new EventEmitter<void>();

   // Função chamada quando o botão é clicado
  redirectTo() {
     // Dispara o evento para o componente pai, o pai decide o que fazer, nesse caso aq esta navegando
    this.redirectRouteEvent.emit();
  }
}


 
