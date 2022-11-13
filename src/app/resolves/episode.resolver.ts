import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IPaginatedData} from "../interfaces";
import {EpisodeService} from "../services/episode.service";

@Injectable({
  providedIn: 'root'
})

export class EpisodeResolver implements Resolve<IPaginatedData> {
  constructor(private episodeService: EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginatedData> {
    const page = route.queryParams['page'];
    return this.episodeService.getAll(page);
  }
}
