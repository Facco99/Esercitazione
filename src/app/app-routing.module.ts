import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { LoginService } from './guard/login.service';
import { CanactivateService } from './guard/canactivate-login.service';
import { EditGameGuard } from './guard/edit-game.guard';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
    {path: 'home', component:HomeComponent, canActivate: [LoginService]},
    {path: 'game-list', component:GameListComponent, canActivate: [LoginService]},
    {path: 'edit-game', component:EditGameComponent, canActivate: [LoginService, EditGameGuard]},
    {path: 'game-detail/:id', component:GameDetailComponent, canActivate: [LoginService]},
    {path: 'login', component:LoginComponent, canActivate: [CanactivateService]},
    {path: 'register', component:RegisterComponent},
    {path: '', redirectTo: '/login', pathMatch:'full'}
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