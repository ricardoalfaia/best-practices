import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent
  ]
})
export class SharedModule { }
