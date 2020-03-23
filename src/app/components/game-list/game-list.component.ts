import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/models/GameInterface';
import { GamelistService } from 'src/app/services/gamelist.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @Output('showDetail')
  showDetailEvent: EventEmitter<number> = new EventEmitter();

  constructor(private gameListService: GamelistService) { 

  }

  ngOnInit(): void {
    this.gameListService;
  }
  gameList: GameItem[] = this.gameListService.getGameList();

  showDetail(id: number){
    this.showDetailEvent.emit(id);
  }
}
