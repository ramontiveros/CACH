import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
      
      path: 'app',
      component: MainComponent,
      children: [
        {
            path: '',
            component: DashboardComponent
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