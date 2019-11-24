import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  currentGameId: string;
  serverIp: string;
  playerId: string;
  gameIdData: any;
  constructor(private http: HttpClient) {}
  setServerIp(serverIp: string) {
    this.serverIp = serverIp;
  }
  getServerIp() {
    return this.serverIp;
  }
  setGameId(gameId: string) {
    this.currentGameId = gameId;
  }
  getGameId() {
    return this.currentGameId;
  }
  savePlayerId(playerId: string) {
    this.playerId = playerId;
  }
  sendPlayerId() {
    this.http.post(this.serverIp , this.playerId);
  }
  // getGameIdFromServer() {
  //   this.http.post(`${this.serverIp}:8080/session/generate`, {
  //     playerId: this.playerId
  //   }).subscribe( data => this.gameIdData = data);
  //   this.setGameId(this.gameIdData.gameId);
  // }
  sendCards() {

  }
}
