import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FormEditComponent } from "./form-edit/form-edit.component";
import { FormListComponent } from "./form-list.component";

@NgModule({
    declarations: [
        FormListComponent,
        FormEditComponent
    ],
    imports: [
        FormsModule,
        //BrowserModule better to import common module
        SharedModule,
        RouterModule.forChild([
            { path: 'form-list', component: FormListComponent }
        ])
    ]
})
export class FormListModule {

}