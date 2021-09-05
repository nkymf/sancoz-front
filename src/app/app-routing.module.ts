import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UserTableComponent} from "./Components/User/table/user-table.component";
import {UserCreateComponent} from "./Components/User/create/user-create.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [UserTableComponent, AppComponent, UserCreateComponent]
