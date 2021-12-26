import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { HashiraDetailComponent } from "./hashira-detail/hashira-detail.component";
import { HashiraEditComponent } from "./hashira-edit/hashira-edit.component";
import { HashiraStartComponent } from "./hashira-start/hashira-start.component";
import { HashirasResolverService } from "./hashiras-resolver.service";
import { HashirasComponent } from "./hashiras.component";

const routes: Routes = [
    { 
        path: 'hashiras', 
        component: HashirasComponent,
        canActivate: [AuthGuard], 
        children: [
            { path: '', component: HashiraStartComponent },
            { path: 'new', component: HashiraEditComponent},
            { path: ':id', component: HashiraDetailComponent, resolve: [HashirasResolverService]},
            { path: ':id/edit', component: HashiraEditComponent, resolve: [HashirasResolverService]}
        ] 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HashirasRoutingModule {

}