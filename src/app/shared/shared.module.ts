import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

const COMPONENTS = [

  PageNotFoundComponent,
  LoadingSpinnerComponent

]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule,
    COMPONENTS
  ]

})

export class SharedModule { }
