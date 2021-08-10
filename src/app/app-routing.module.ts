import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarrersComponent } from './carrers/carrers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { WelocomeComponent } from './welocome/welocome.component';

const routes: Routes = [
  { path : 'register', component:LoginformComponent},
  { path : 'login', component:LoginComponent},
  { path : 'welcome/:name', component:WelocomeComponent},
  { path : 'about', component:AboutusComponent},
  { path : 'contacts', component:ContactsComponent},
  { path : 'career', component:CarrersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const MyRouting = [LoginformComponent, LoginComponent,WelocomeComponent,AboutusComponent,ContactsComponent,CarrersComponent];