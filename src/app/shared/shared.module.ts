import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipe/truncate.pipe';
import { dateFormatddmmyyyy } from './pipe/dateformat.pipe';


@NgModule({
  declarations: [
    TruncatePipe,
    dateFormatddmmyyyy
  ],
  exports: [
    TruncatePipe ,
    dateFormatddmmyyyy,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
