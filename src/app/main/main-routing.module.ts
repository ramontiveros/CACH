import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../auth-guard.service';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard.component';
import { VideoComponent } from './matches/video.component';

const routes: Routes = [
  {

      path: 'app',
      component: MainComponent,
    canActivate: [AuthGuard],
      children: [
        {
            path: '',
            component: DashboardComponent,

        },
        {
          path: 'videos',
          component: VideoComponent,
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }

export const routedComponents = [MainComponent];
