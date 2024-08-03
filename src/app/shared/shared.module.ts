import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const IMPORTS = [
  RouterModule,
  ReactiveFormsModule,
  CommonModule
];

const DECLARATIONS = [];

@NgModule({
  declarations: [ ...DECLARATIONS ],
  imports: [...IMPORTS],
  exports: [
    ...IMPORTS,
    ...DECLARATIONS
  ]
})
export class SharedModule { }
