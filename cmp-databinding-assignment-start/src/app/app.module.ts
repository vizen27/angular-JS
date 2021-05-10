import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GameControlComponent } from "./GameControl/gamecontrol.component";
import { EventComponent } from "./Even/even.component";
import { OddComponent } from "./Odd/odd.component";
import { OutputComponent } from "./outputNumber/output.component";

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EventComponent,
    OddComponent,
    OutputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
