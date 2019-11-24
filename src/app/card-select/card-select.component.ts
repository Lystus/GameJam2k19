import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../DataService';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.css']
})
export class CardSelectComponent implements OnInit {
  serverIp: string;
  gameId: string;
  constructor(private router: Router , private dataService: DataService) { }
  ngOnInit() {
    this.serverIp = this.dataService.getServerIp();
    this.gameId = this.dataService.getGameId();
  }

}
