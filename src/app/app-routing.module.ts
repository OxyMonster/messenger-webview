import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'billers', pathMatch: 'full' },
  
  // & & &  Lazy Load * * * *
  { path: 'billers', loadChildren: () => import('src/app/billers/billers.module').then(m => m.BillersModule) },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
