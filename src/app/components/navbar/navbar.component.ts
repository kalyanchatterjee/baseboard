import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

import { Timeframe } from "../../models/Timeframe";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  timeframes: Timeframe[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.timeframes = this.dataService.getTimeframeValues();
    console.log(this.timeframes);
  }
}
