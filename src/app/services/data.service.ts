import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Card } from "../models/Card";
import { Timeframe } from "../models/Timeframe";
import { MainComponent } from "../components/main/main.component";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "applicaiton/json" })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  //postUrl: string = "http://10.126.224.34:3000/api/data";
  //constructor(private http: HttpClient) {}

  // getCardsData(): Observable<Card[]> {
  //   return this.http.get<Card[]>(this.postUrl);
  // }
  getCardsData(): Card[] {
    const cards = [
      {
        name: "Sales",
        n1: 8.98990042658679,
        n2: 82167.59999999951,
        n3: 913999.0000000059,
        n4: 831831.4000000064
      },
      {
        name: "Some Other Metric",
        n1: 8.98990042658679,
        n2: 82167.59999999951,
        n3: 913999.0000000059,
        n4: 831831.4000000064
      },
      {
        name: "Yet Another Metric",
        n1: 8.98990042658679,
        n2: 82167.59999999951,
        n3: 913999.0000000059,
        n4: 831831.4000000064
      }
    ];

    return cards;
  }

  getTimeframeValues(): Timeframe[] {
    const timeframes = [
      {
        timeframe_desc: "WTD (14-Jul 2019 to 15-Jul 2019)",
        timeframe_id: 100826
      },
      {
        timeframe_desc: "Yesterday (15-Jul 2019 to 15-Jul 2019)",
        timeframe_id: 101238
      }
    ];

    return timeframes;
  }
}
