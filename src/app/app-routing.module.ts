import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

const appRoutes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'game-list', component:GameListComponent},
    {path: 'edit-game', component:EditGameComponent},
    {path: 'game-detail/:id', component:GameDetailComponent},
    {path: 'login', component:LoginComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class EsercitazioneRoutingModule{ }