import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/models/GameInterface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameItem[] = [
    {id: 1, nome:"Fifa 20",descrizione: "Gioco di calcio",genere: "Sport",rating: 4,prezzo:70,annoUscita:new Date}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
