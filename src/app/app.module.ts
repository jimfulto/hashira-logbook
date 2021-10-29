import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HashirasComponent } from './hashiras/hashiras.component';
import { HashiraListComponent } from './hashiras/hashira-list/hashira-list.component';
import { HashiraDetailComponent } from './hashiras/hashira-detail/hashira-detail.component';
import { HashiraItemComponent } from './hashiras/hashira-list/hashira-item/hashira-item.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-list/form-edit/form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HashirasComponent,
    HashiraListComponent,
    HashiraDetailComponent,
    HashiraItemComponent,
    FormListComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
