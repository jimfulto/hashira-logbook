import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HashiraDetailComponent } from "./hashira-detail/hashira-detail.component";
import { HashiraEditComponent } from "./hashira-edit/hashira-edit.component";
import { HashiraItemComponent } from "./hashira-list/hashira-item/hashira-item.component";
import { HashiraListComponent } from "./hashira-list/hashira-list.component";
import { HashiraStartComponent } from "./hashira-start/hashira-start.component";
import { HashirasRoutingModule } from "./hashiras-routing.module";
import { HashirasComponent } from "./hashiras.component";

@NgModule({
    declarations: [
        HashirasComponent,
        HashiraListComponent,
        HashiraDetailComponent,
        HashiraItemComponent,
        HashiraStartComponent,
        HashiraEditComponent
    ],
    imports: [
        RouterModule,
        //BrowserModule better to import common module
        SharedModule,
        ReactiveFormsModule,
        HashirasRoutingModule
    ]
})
export class HashirasModule {

}