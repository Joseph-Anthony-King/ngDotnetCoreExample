import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UTCStringToDateStringPipe } from './utcstring-to-short-date.pipe'

@NgModule({
  declarations: [ UTCStringToDateStringPipe ],
  imports: [ CommonModule ],
  exports: [ UTCStringToDateStringPipe ]
})
export class SharedModule { }
