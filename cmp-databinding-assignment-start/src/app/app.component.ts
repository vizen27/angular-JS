import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  interval;
  counter = 0;
  resetTxt = "Please Press Start Button!";
  txtOutput: any = "";
  flag = false;
  oddArrs = [];
  evenArrs = [];
  allNum: any;

  ngOnInit(): void {
    this.txtOutput = this.resetTxt;
  }

  start(e) {
    this.flag = true;

    if (this.flag) {
      this.setInternalEvent();
    }
  }
  stop(e) {
    console.log("stop Interval!");

    clearInterval(this.interval);
    this.counter = 1;
    this.txtOutput = this.resetTxt;
    console.log(this.evenArrs, this.oddArrs);

    this.allNum = [...this.evenArrs, ...this.oddArrs].sort();
    console.log(this.allNum);
  }
  pause(e) {
    console.log("pause Interval");
    clearInterval(this.interval);
  }

  setInternalEvent() {
    console.log("start Interval!");
    this.interval = setInterval(() => {
      this.txtOutput = this.counter++;

      this.counter % 2 == 0
        ? this.evenArrs.push(this.counter)
        : this.oddArrs.push(this.counter);
    }, 1000);
  }
}
