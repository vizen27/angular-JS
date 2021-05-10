import { Component, Input } from "@angular/core";

@Component({
  selector: "app-output",
  templateUrl: "./output.component.html",
  styles: [
    `
      p {
        color: white;
      }
    `,
  ],
})
export class OutputComponent {
  @Input() number;

  getBGColor() {
    return this.number % 2 == 0 ? "green" : "red";
  }
}
