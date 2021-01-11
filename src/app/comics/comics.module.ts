import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { CardModule } from '../components/card/card.module';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    ComicsComponent
  ]
})
export class ComicsModule { }
