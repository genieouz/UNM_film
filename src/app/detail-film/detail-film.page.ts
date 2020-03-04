import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { IFilm } from "../typings/interfaces/film.interface";
import { TmdbApiService } from "../shared/services/tmdb-api.service";

@Component({
  selector: "app-detail-film",
  templateUrl: "./detail-film.page.html",
  styleUrls: ["./detail-film.page.scss"]
})
export class DetailFilmPage implements OnInit {
  public film: IFilm;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tmdbApiService: TmdbApiService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.film = this.router.getCurrentNavigation().extras.state.film;
      }
    });
  }

  ngOnInit() {}

  loadPosterFilm(poster_path): string {
    return this.tmdbApiService.getImageFromApi(poster_path);
  }
}
