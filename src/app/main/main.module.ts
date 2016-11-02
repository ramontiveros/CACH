import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';

import { DashboardComponent }    from './dashboard.component';
import { MainComponent }    from './main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    DashboardComponent,
    MainComponent,
  ],
  providers: []
})
export class MainModule {}
