import {Component, Input, OnInit} from '@angular/core';

import {ICharacter, IEpisode} from "../../interfaces";
import {CharacterService} from "../../services";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input()
  episode: IEpisode;

  characters: ICharacter[];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    const characterIds = this.episode.characters.map(value => value.split('/')[5]).join();
    this.characterService.getByIds(characterIds).subscribe(value => this.characters = value);
  }

}
