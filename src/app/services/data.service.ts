import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Card } from "../models/Card";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "applicaiton/json" })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  postUrl: string = "http://10.126.224.34:3000/api/data";
  constructor(private http: HttpClient) {}

  getCardsData(): Observable<Card[]> {
    return this.http.get<Card[]>(this.postUrl);
  }
}
