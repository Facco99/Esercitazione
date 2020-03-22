import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { GamedetailComponent } from './gamedetail/gamedetail.component';
import { EditgameComponent } from './editgame/editgame.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GameslistComponent,
    GamedetailComponent,
    EditgameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
