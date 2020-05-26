import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../app/app.constant';

@Injectable()
export class Api {
  constructor(private http: HttpClient) {}

  public get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    const headers = new HttpHeaders(
      {'X-CMC_PRO_API_KEY': 'c3d576b3-0131-4ce7-809c-c8bdfee02634', 'Content-Type': 'application/x-www-form-urlencoded'}
    );

    return this.http.get(apiUrl + endpoint, { headers: headers, params: reqOpts.params } );
  }
}
