import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() hiddenFormsEvent = new EventEmitter<boolean>();

  hiddenForms() {
    this.hiddenFormsEvent.emit(true);
  }
}
