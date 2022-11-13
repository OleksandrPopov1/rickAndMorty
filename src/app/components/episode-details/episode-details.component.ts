import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EpisodeService} from "../../services/episode.service";
import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  episode: IEpisode;

  constructor(private activatedRoute: ActivatedRoute, private episodeService: EpisodeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.episodeService.getById(id).subscribe(value => this.episode = value);
    })
  }

}
