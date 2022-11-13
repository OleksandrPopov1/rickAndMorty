import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisode, IPaginatedData} from "../interfaces";
import {urls} from "../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IPaginatedData> {
    return this.httpClient.get<IPaginatedData>(urls.episode, {params: {page}});
  }

  getById(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`);
  }
}
