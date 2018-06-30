import { ApiModule } from './../swagger/api.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoitemService } from './todoitem.service';

@NgModule({
  imports: [ApiModule],
  providers: [TodoitemService],
})
export class ServicesModule {}
