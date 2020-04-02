import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/models/GameInterface';
import { GamelistService } from 'src/app/services/gamelist.service';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameItem[]

  constructor(private gameListService: GamelistService, private route: Router) { 
    this.gameList = this.gameListService.getGameList();
  }

  ngOnInit(): void {
    this.gameListService;
  }

  modifica(){
    this.route.navigateByUrl("/edit-game");
  }

}
