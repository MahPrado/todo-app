
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header-button',
  imports: [],
  templateUrl: './header-button.html',
  styleUrl: './header-button.css',
})
export class HeaderButton {

  @Input({required: true}) btnText!: string;
  @Input() isActive: boolean = false;
  @Output() redirectRouteEvent = new EventEmitter<void>();

  redirectTo() {
    this.redirectRouteEvent.emit();
  }
}