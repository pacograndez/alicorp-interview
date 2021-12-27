import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cruds',
    loadChildren: () => import('./containers/cruds/cruds.module').then(m => m.CrudsModule)
  },
  {
    path: '',
    redirectTo: 'cruds',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
