import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-gamecontrol",
  templateUrl: "./gamecontrol.component.html",
})
export class GameControlComponent {
  @Output() onStart = new EventEmitter<number>();
  @Output() onStop = new EventEmitter<number>();
  @Output() onPause = new EventEmitter<number>();

  @Input() txtOutput;
  //lastNumber = 0;

  startEvent(e) {
    this.onStart.emit();
  }
  stopEvent(e) {
    this.onStop.emit();
  }
  pauseEvent(e) {
    this.onPause.emit();
  }

  /*
  Max Solution : 

  onStartGame(){
    this.interval = setInterval(() => {
      this.onStart.emit(this.lastNumber + 1)
      this.lastNumber++
    }, 1000)
  }



  */
}
