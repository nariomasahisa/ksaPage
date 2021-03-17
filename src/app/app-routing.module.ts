import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from '../app/top/top.component';
import { EmptyComponent } from './empty/empty.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "",
    component: TopComponent
  },
  {
    path: "",
    component: EmptyComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "ksa", component: EmptyComponent },
      { path: "ksd", component: EmptyComponent },
      { path: "process", component: EmptyComponent },
      { path: "qa", component: EmptyComponent },
      { path: "access", component: EmptyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
