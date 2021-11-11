import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { HashiraDetailComponent } from './hashiras/hashira-detail/hashira-detail.component';
import { HashiraStartComponent } from './hashiras/hashira-start/hashira-start.component';
import { HashirasComponent } from './hashiras/hashiras.component';

const approutes: Routes = [
  { path: '', redirectTo: '/hashiras', pathMatch: 'full' },
  { path: 'hashiras', component: HashirasComponent, children: [
    { path: '', component: HashiraStartComponent },
    { path: ':id', component: HashiraDetailComponent }
  ] },
  { path: 'form-list', component: FormListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
