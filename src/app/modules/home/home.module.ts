import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ReactiveFormsModule } from '@angular/forms';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
