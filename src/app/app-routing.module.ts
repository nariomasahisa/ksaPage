import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from '../app/top/top.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: "",
    component: TopComponent
  },
  {
    path: "",
    component: EmptyComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
