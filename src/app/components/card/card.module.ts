import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
