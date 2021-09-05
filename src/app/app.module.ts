import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {UserTableComponent} from "./Components/User/table/user-table.component";
import {UserCreateComponent} from "./Components/User/create/user-create.component";
import {UserEditComponent} from "./Components/User/edit/user-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'user/list', component: UserTableComponent},
      {path: 'user/create', component: UserCreateComponent},
      {path: 'user/edit/:id', component: UserEditComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
