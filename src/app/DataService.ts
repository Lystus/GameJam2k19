import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentGameId: number;
  serverIp: string;
  playerId: number;
  gameData: any;
  playerCards: number[];
  currentRound: number;
  constructor(private http: HttpClient) {}
  setServerIp(serverIp: string) {
    this.serverIp = serverIp;
  }
  getServerIp() {
    return this.serverIp;
  }
  setGameId(gameId: number) {
    this.currentGameId = gameId;
  }
  getGameId() {
    return this.currentGameId;
  }
  savePlayerId(playerId: number) {
    this.playerId = playerId;
  }
  sendPlayerId() {
    this.http.post(this.serverIp , this.playerId);
  }
  setGameData(data: any) {
    this.gameData = data;
  }
  getGameData() {
    return this.gameData;
  }
  getGameIdFromServer() {
    this.http.post(`http://${this.serverIp}:8080/session/generate`, {
      playerId: this.playerId
    }).subscribe( data => {
      this.setGameData(data);
      this.setGameId(data['gameId']);
      console.log(data['gameId']);
    });
  }
  savePlayerCards(cards: number[]) {
    this.playerCards = cards;
  }
  sendCards() {
    this.http.post(`http://${this.serverIp}:8080/session/selectCards`, {
      gameId: this.currentGameId,
      playerId: this.playerId,
      cards: this.playerCards
    }).subscribe();
  }
  getEnemyChoosenCards() {
    this.http.get(`http://${this.serverIp}:8080/session/getGameInfo/${this.currentGameId}`).subscribe(data => {
      if (data['player1Id'] === this.playerId) {
        console.log(data['player2Cards']);
        return data['player2Cards'];
      } else {
        console.log(data['player1Cards']);
        return data['player1Cards'];
      }
    });
  }
}
