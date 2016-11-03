import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent }    from './main.component';

import { DashboardComponent }    from './dashboard.component';
import { VideoComponent }    from './matches/video.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    DashboardComponent,
    MainComponent,
    VideoComponent, 
  ],
  providers: []
})
export class MainModule {}
