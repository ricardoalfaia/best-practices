import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IArticleItem } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import {  Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { IClient } from 'src/app/models/client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientForm: FormGroup;
  submitted = false;
  subscriptions: Subscription[] = [];
  articles: IArticleItem[] = []

  constructor(
    public fb: FormBuilder,
    private readonly articleService: ArticleService,
    private readonly accountService: AccountService) {
    this.clientForm = this.fb.group({
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ])
    })
  }

  ngOnInit(): void {
    this.listArticles();
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  public listArticles() {
    this.subscription = this.articleService.getAll().subscribe((data: IArticleItem[]) => {
      this.articles = data
    })
  }

  submitForm() {
    this.submitted = true;
    if (this.clientForm.invalid) {
      return;
    }
    this.accountService.create(this.clientForm.value)
    .subscribe((result:IClient) => console.log('salvo com sucesso!'))

    console.log(JSON.stringify(this.clientForm.value));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0)
  }
}
