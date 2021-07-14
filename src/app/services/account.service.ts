import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from '../models/client.model';
import { urlConfig } from '../configs/url.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

   public create(client: IClient): Observable<IClient> {
      return this.httpClient.post<IClient>(urlConfig.accounts, client)
   }
}



