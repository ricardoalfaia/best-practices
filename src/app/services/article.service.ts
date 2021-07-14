import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConfig } from '../configs/url.config';
import { IArticleItem } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IArticleItem[]> {
    return this.httpClient.get<IArticleItem[]>(urlConfig.articles);
  }
}
