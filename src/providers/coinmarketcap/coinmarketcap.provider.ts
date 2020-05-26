import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class CoinProvider {
  constructor(private api: Api) {}

  public getAllCoin(): Promise<any> {
    return this.api.get('start=1&limit=10&convert=USD').toPromise();
  }
}
