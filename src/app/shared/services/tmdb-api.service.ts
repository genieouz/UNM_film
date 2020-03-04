import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TmdbApiService {
  constructor(private http: HttpClient) {}

  public getImageFromApi(name): string {
    return `https://image.tmdb.org/t/p/w300${name}`;
  }
}
