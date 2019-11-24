import { Component, OnInit } from '@angular/core';
import {DataService} from '../DataService';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  myPlayerCard: number[];
  enemyPlayerCards: number[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("hit");
    this.myPlayerCard = this.dataService.playerCards;
    console.log(this.dataService.getEnemyChoosenCards());
  }

}
