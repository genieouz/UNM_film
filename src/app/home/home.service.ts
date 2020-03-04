import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private http: HttpClient) {}

  loadFilms(query: string = "star", page: number = 1) {
    return this.http.get(
      `${environment.API_URL}/search/movie?api_key=${environment.API_KEY}&query=${query}&page=${page}`
    );
  }
}
