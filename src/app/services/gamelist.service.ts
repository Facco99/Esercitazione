import { Injectable } from '@angular/core';
import { GameItem } from '../models/GameInterface';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {

    private gameListStored: GameItem[] = [
      {id: 1, nome:"Fifa 20",descrizione: "Gioco di calcio",genere: "Sport",rating: 4,prezzo:70,annoUscita:new Date(2019, 9)},
      {id: 2, nome:"Fortnite",descrizione: "100vs game",genere: "Battleroyal",rating: 5,prezzo:0,annoUscita:new Date(2017, 9)},
      {id: 2, nome:"Gta V",descrizione: "Online e storia",genere: "Action",rating: 5,prezzo:70,annoUscita:new Date(2015, 9)}
    ];

  constructor() { }

  getGameList(): GameItem[]{
    return this.gameListStored;
  }

  getGameItem(id: number): GameItem{
    return this.gameListStored.find(item =>{
      return item.id === id;
    });
  }
}
