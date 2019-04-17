import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

export const PRIMENG_MODULE = [
];
@NgModule({
  declarations: [],
  imports: [
    FormsModule,CommonModule,
    PRIMENG_MODULE,
  ],
  exports: [FormsModule,CommonModule,PRIMENG_MODULE],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
