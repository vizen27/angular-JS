import { Component, Input } from "@angular/core";
@Component({
  selector: "app-even",
  templateUrl: "./even.component.html",
  styles: [``],
})
export class EventComponent {
  @Input() number: number;
}
