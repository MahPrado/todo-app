
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header-button',
  standalone:true,
  imports: [],
  templateUrl: './header-button.html',
  styleUrl: './header-button.scss',
})
export class HeaderButton {

  @Input() btnText!: string;
  @Input() isActive: boolean = false;
  @Output() redirectRouteEvent = new EventEmitter<void>();

  redirectTo() {
    this.redirectRouteEvent.emit();
  }
}