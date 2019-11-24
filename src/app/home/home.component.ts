import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../DataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serverIp = '10.201.63.77';
  gameId = '123';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  createGame() {
    this.dataService.savePlayerId(Math.random() * 10000);
    this.dataService.setServerIp(this.serverIp);
    this.dataService.getGameIdFromServer();
    this.router.navigate(['/cardselect']);
  }

  searchButton() {
    console.log(this.dataService.getGameData());
  }
}
