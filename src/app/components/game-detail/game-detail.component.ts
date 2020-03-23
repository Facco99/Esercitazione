import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/models/GameInterface';
import { GamelistService } from 'src/app/services/gamelist.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input()
  gameId:number;

  game: GameItem;

  constructor(private gameListService: GamelistService) { }

  ngOnInit(): void {
    this.game=this.gameListService.getGameItem(this.gameId);
  }

}
