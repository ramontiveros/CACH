import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../auth-guard.service';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard.component';
import { VideoComponent } from './matches/video.component';
import { VideoCreateComponent } from './matches/video-create.component';
import { VideosListComponent } from './matches/videos-list.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
          path: '',
          component: DashboardComponent,

      },
      {
        path: 'videos',
        children: [
          {
            path: '',
            component: VideosListComponent
          },
          {
            path: 'create',
            component: VideoCreateComponent
          },
          {
            path: 'view/:id',
            component: VideoComponent
          }
        ]
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
