import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../DataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serverIp = '456';
  gameId = '123';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  createGame(): number {
    //this.dataService.savePlayerId('awdwd' + Math.random() * 10);
    //this.dataService.setServerIp(this.serverIp);
    //this.dataService.getGameIdFromServer();
    //this.router.navigate(['/cardsselect']);
    return 1;
  }
}
