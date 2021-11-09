import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { HashirasComponent } from './hashiras/hashiras.component';

const approutes: Routes = [
  { path: '', redirectTo: '/hashiras', pathMatch: 'full' },
  { path: 'hashiras', component: HashirasComponent },
  { path: 'form-list', component: FormListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
