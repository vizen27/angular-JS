import { Component } from "@angular/core";

@Component({
  selector: "app-warning",
  template: ` <div class="warning">Warning!!</div> `,
  styles: [
    `
      .warning {
        color: red;
        border: solid 1px #f00;
        text-align: center;
        background-color: #ffeeee;
        padding: 5px;
      }
    `,
  ],
})
export class WarningAlert {}
