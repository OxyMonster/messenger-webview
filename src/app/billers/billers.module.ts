import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillersMainCategoriesComponent } from './billers-main-categories/billers-main-categories.component';
import { BillersRoutingModule } from './billers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BillersComponent } from './billers.component';

const COMPONENTS = [
  BillersComponent,
  BillersMainCategoriesComponent
]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BillersRoutingModule
  ],
  exports: [ COMPONENTS ]
})
export class BillersModule { }
