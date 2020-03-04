import { Component } from "@angular/core";
import { IFilm } from "../typings/interfaces/film.interface";
import { films } from "../helpers/film-data";
import { NavigationExtras, Router } from "@angular/router";
import { HomeService } from "./home.service";
import { TmdbApiService } from "../shared/services/tmdb-api.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public films: IFilm[];
  constructor(
    private router: Router,
    private homeService: HomeService,
    private tmdbApiService: TmdbApiService
  ) {
    this.films = films;
    this.homeService.loadFilms().subscribe((data: any) => {
      this.films = data.results;
    });
  }

  openDetailsFilm(film: IFilm): void {
    let navigationExtras: NavigationExtras = {
      state: {
        film: film
      }
    };
    this.router.navigate(["detail-film"], navigationExtras);
  }

  loadPosterFilm(poster_path): string {
    return this.tmdbApiService.getImageFromApi(poster_path);
  }
}
