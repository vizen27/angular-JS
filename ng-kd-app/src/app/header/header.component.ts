import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true; //for mobile view

  @Output() featureSelected = new EventEmitter<string>(); //listenable from parent component

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
