import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

<<<<<<< HEAD
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent],
  imports: [BrowserModule],
=======
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/Main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
>>>>>>> inna
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
