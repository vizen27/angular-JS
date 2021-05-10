import { Component, Input } from "@angular/core";

@Component({
  selector: "app-odd",
  templateUrl: "./odd.component.html",
  styles: [``],
})
export class OddComponent {
  @Input() number: number;
}
