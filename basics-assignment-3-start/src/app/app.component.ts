import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // styleUrls: ["./app.component.css"],
  styles: [
    `
      .txtColor {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showSecret = false;
  outputArr = [];
  date = new Date();

  btnClick() {
    this.showSecret = !this.showSecret;
    //this.outputArr.push(this.outputArr.length + 1);
    this.outputArr.push(this.date);

    //return (this.showSecret = !this.showSecret);
  }
}
