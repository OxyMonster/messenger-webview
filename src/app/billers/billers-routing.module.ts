import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillersMainCategoriesComponent } from './billers-main-categories/billers-main-categories.component';


const routes: Routes = [

  { path: '', component: BillersMainCategoriesComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BillersRoutingModule { }
