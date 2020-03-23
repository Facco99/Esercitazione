import { Injectable } from '@angular/core';
import { GameItem } from '../models/GameInterface';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {

    private gameListStored: GameItem[] = [
      {id: 1, nome:"Fifa 20",descrizione: "Gioco di calcio",genere: "Sport",rating: 4,prezzo:70,annoUscita:new Date(2019, 9)}
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
