import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/Main/main.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
