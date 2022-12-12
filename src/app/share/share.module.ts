import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@share/material/material.module'
import { RouterModule } from '@angular/router';


@NgModule({
  exports: [
    MaterialModule,
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShareModule { }
