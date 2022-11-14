import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episode: IEpisode;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.router.navigate([this.episode.id]);
  }
}
