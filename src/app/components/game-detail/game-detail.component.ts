import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/models/GameInterface';
import { GamelistService } from 'src/app/services/gamelist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input()
  gameId:number;

  game: GameItem;

  constructor(private route:ActivatedRoute,private gameListService: GamelistService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.game = this.gameListService.getGameItem(Number(params.get("id")));
    })
  }

}
