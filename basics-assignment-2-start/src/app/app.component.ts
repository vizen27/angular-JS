import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  username = "";
  allowButton = false;

  onUpdateUserName(event: Event) {
    // console.log(event);
    //this.username = event.target.value;
    this.username = (<HTMLInputElement>event.target).value;
    this.username !== ""
      ? (this.allowButton = true)
      : (this.allowButton = false);
  }
  btnClickReset(event: Event) {
    this.username = "";
  }
}
