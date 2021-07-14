import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ArticleItem } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientForm: FormGroup;
  submitted = false;

  articles: ArticleItem[] = []

  constructor(public fb: FormBuilder, private articleService: ArticleService) {
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

  public listArticles() {
    this.articleService.getAll().subscribe((data: ArticleItem[]) => {
      this.articles = data
    })
  }

  nextStep() {
    this.submitted = true;
    if (this.clientForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.clientForm.value));
  }

}
