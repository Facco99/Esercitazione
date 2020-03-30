import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentRoute:string=null;

  menuList: MenuItem[] = [
    { id: 1, description: 'Home', url: "/home"},
    { id: 2, description: 'Lista giochi', url: "/game-list"},
    { id: 3, description: 'Modifica gioco', url: "edit-game"}
    
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      //console.log('current route: ', this.router.url.toString());
      this.currentRoute=this.router.url.toString();
      });
  }

}
