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
  gameId: number;
  cards: number[] = [];
  constructor(private router: Router , private dataService: DataService) { }
  ngOnInit() {
    this.serverIp = this.dataService.getServerIp();
    this.gameId = this.dataService.getGameId();
    console.log(`${this.gameId} - CardSelect`);
  }

  selectCard(card: number ) {
    if (this.cards.indexOf(card) === -1) {
      this.cards.push(card);
      console.log('Guckst du die Karte Nummer ' + card + ' wurde geaddet');
    } else {
      this.cards.splice(this.cards.indexOf(card), 1);
      console.log('Guckst du die Karte Nummer ' + card + ' wurde gedeletet');
    }
  }
  showGameId() {
    console.log(this.gameId);
  }
  startGame() {
    this.dataService.savePlayerCards(this.cards);
    this.dataService.currentRound = 0;
    this.dataService.sendCards();
    this.router.navigate(['/game']);
  }
}
