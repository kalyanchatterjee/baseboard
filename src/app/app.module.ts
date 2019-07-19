import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DataService } from "./services/data.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
