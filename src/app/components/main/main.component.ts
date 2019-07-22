import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

import { CardComponent } from "../card/card.component";
import { Card } from "../../models/Card";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private dataService: DataService) {}
  cards: Card[];
  ngOnInit() {
    // this.dataService.getCardsData().subscribe(cards =>{
    //   this.cards=cards;
    //   console.log(this.cards)
    // })
    this.cards = this.dataService.getCardsData();
  }
}
